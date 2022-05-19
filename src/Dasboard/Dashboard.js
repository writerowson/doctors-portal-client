import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-slide-bar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                {/* <!-- Page content here --> */}
                <h2 className='text-5xl font-bold  text-purple-500'>DashBoard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-slide-bar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Appointments</Link></li>
                    <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>
                </ul>

            </div>
        </div>
    );
};
export default Dashboard;
