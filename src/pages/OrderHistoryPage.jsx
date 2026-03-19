import { Card, CardBody, Chip, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import { useUser } from "../contexts/userContext";
import { useEffect, useState } from "react";
import { databases, Query } from "../lib/appwrite";

export default function OrderHistoryPage() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      databases.listDocuments(
        '69b5a810001139b4e286', // Database ID
        'orders',               // Collection ID
        [
          Query.equal('userId', user.$id),
          Query.orderDesc('createdAt')
        ]
      ).then(response => {
        setOrders(response.documents);
        setIsLoading(false);
      }).catch(error => {
        console.error("Error fetching orders:", error);
        setIsLoading(false);
      });
    }
  }, [user]);

  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case 'paid':
      case 'successful':
        return 'success';
      case 'pending':
        return 'warning';
      case 'failed':
        return 'danger';
      default:
        return 'default';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Spinner size="lg" color="success" />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      
      {orders.length === 0 ? (
        <Card>
          <CardBody className="py-12 text-center text-gray-500 text-lg">
            You haven't placed any orders yet.
          </CardBody>
        </Card>
      ) : (
        <Table aria-label="Order history table">
          <TableHeader>
            <TableColumn>DATE</TableColumn>
            <TableColumn>REFERENCE</TableColumn>
            <TableColumn>AMOUNT</TableColumn>
            <TableColumn>STATUS</TableColumn>
            <TableColumn>ITEMS</TableColumn>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.$id}>
                <TableCell>{new Date(order.createdAt).toLocaleDateString()}</TableCell>
                <TableCell className="font-mono text-xs">{order.paymentReference || order.$id}</TableCell>
                <TableCell className="font-bold">${order.totalAmount?.toFixed(2)}</TableCell>
                <TableCell>
                  <Chip color={getStatusColor(order.status)} variant="flat" size="sm" className="capitalize">
                    {order.status || 'Pending'}
                  </Chip>
                </TableCell>
                <TableCell>
                  <div className="text-xs text-gray-600">
                    {JSON.parse(order.items || '[]').map(item => `${item.productName} (x${item.quantity})`).join(', ')}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
