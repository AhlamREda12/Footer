import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from "react-icons/ai";
import DashboardSidebar from '../components/DashboardSidebar';
import OrderStatusSummary from '../components/OrderStatusSummary';
import OrdersTable from '../components/OrderTable';

const DashboardPage = () => {
    const initialOrders = [
      { id: 1, orderNumber: '10000074281', orderDate: '2024-08-05', seller: "", price: '161.0000 SAR', status: 'Canceled' },
      { id: 2, orderNumber: '10000069256', orderDate: '2024-06-30', seller: "", price: '8970.0000 SAR', status: 'Processing' },
      { id: 3, orderNumber: '1000005279', orderDate: '2024-03-17', seller: "", price: '16.6497 SAR', status: 'Processing' },
      { id: 4, orderNumber: '1000005727', orderDate: '2024-03-12', seller: "", price: '15.8125 SAR', status: 'Processing' },
      { id: 5, orderNumber: '10000053379', orderDate: '2024-02-12', seller: "", price: '1086.6925 SAR', status: 'Pending' }
    ];

    const [completedOrders, setCompletedOrders] = useState(0);

    const handleUpdateCompletedOrders = (count) => {
      setCompletedOrders(count);
    };

    return (
      <div className="container mx-auto mt-10">
        <nav className="mb-5 flex mt-4 space-x-4 items-center">
          <Link to="/" className="text-gray-500">Dashboard</Link>
          <AiFillCaretRight className='flex' />
          <span className='text-black'>Orders</span>
        </nav>
        <div className='flex flex-col md:flex-row'> 
          <DashboardSidebar />
          <div className="flex-1 p-4">
            <OrderStatusSummary completed={completedOrders} canceled={0} processing={0} />
            <OrdersTable initialOrders={initialOrders} onUpdateCompleted={handleUpdateCompletedOrders} />
          </div>
        </div>
      </div>
    );
};

export default DashboardPage;


