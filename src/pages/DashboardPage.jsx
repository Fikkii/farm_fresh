import { Tabs, Tab, Card, CardBody } from "@heroui/react";
import FarmsTab from "../components/dashboard/FarmsTab";
import ProductsTab from "../components/dashboard/ProductsTab";
import CategoriesTab from "../components/dashboard/CategoriesTab";

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      
      <Tabs aria-label="Dashboard Options" color="success" variant="bordered">
        <Tab key="farms" title="Farms">
          <Card>
            <CardBody>
              <FarmsTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="products" title="Produce">
          <Card>
            <CardBody>
              <ProductsTab />
            </CardBody>
          </Card>
        </Tab>
        <Tab key="categories" title="Categories">
          <Card>
            <CardBody>
              <CategoriesTab />
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
