import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Dialog states for adding user and transaction
  const [isUserDialogOpen, setIsUserDialogOpen] = useState(false);
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false);

  // Form states
  const [userFormData, setUserFormData] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [transactionFormData, setTransactionFormData] = useState({
    amount: "",
    description: "",
  });

  // Input change handlers
  const handleUserInputChange = (e) => {
    setUserFormData({ ...userFormData, [e.target.name]: e.target.value });
  };

  const handleTransactionInputChange = (e) => {
    setTransactionFormData({
      ...transactionFormData,
      [e.target.name]: e.target.value,
    });
  };

  // Save handlers
  const handleSaveUser = () => {
    console.log("User Saved:", userFormData);
    setIsUserDialogOpen(false);
    setUserFormData({ name: "", email: "", mobile: "" });
  };

  const handleSaveTransaction = () => {
    console.log("Transaction Saved:", transactionFormData);
    setIsTransactionDialogOpen(false);
    setTransactionFormData({ amount: "", description: "" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-bgGreenGradient">
      {/* Top Navbar */}
      <header className="bg-lightGreen text-white p-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">Admin Panel</h1>
        <button
          onClick={() => navigate("/profile")}
          className="bg-primaryGreen text-whiteColor px-3 py-1 rounded text-sm"
        >
          Profile
        </button>
      </header>

      {/* Sidebar and Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:flex w-64 bg-primaryGreen text-white flex-col">
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold">Navigation</h2>
          </div>
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate("/admin/dashboard")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-800"
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/admin/transaction")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-800"
                >
                  Transaction Management
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/all-users")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-800"
                >
                  Manage Users
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate("/donation")}
                  className="w-full text-left px-4 py-2 hover:bg-purple-800"
                >
                  Donations
                </button>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4">
          {/* Analytics Section */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <div className="bg-whiteColor p-4 rounded shadow-md">
              <h2 className="text-sm font-medium text-primaryGreen">Total Users</h2>
              <p className="text-2xl font-bold text-primaryGreen">1,024</p>
            </div>
            <div className="bg-whiteColor p-4 rounded shadow-md">
              <h2 className="text-sm font-medium text-primaryGreen">
                Total Transactions
              </h2>
              <p className="text-2xl font-bold text-primaryGreen">₹2,34,500</p>
            </div>
            <div className="bg-whiteColor p-4 rounded shadow-md">
              <h2 className="text-sm font-medium text-primaryGreen">
                Total Donations
              </h2>
              <p className="text-2xl font-bold text-primaryGreen">₹75,400</p>
            </div>
          </section>

          {/* Quick Actions Section */}
          <section>
            <h2 className="text-lg font-semibold mb-4 text-whiteColor">Quick Actions</h2>
            <div className="grid grid-cols-1 gap-4">
              {/* Add User Action */}
              <div className="bg-whiteColor p-4 rounded shadow-md">
                <h3 className="text-sm font-medium text-primaryGreen">
                  Add New User
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  Quickly add a new user by providing their details.
                </p>
                <button
                  onClick={() => setIsUserDialogOpen(true)}
                  className="mt-4 bg-primaryGreen text-white px-4 py-2 rounded w-full"
                >
                  Add User
                </button>
              </div>

              {/* Add Transaction Action */}
              <div className="bg-whiteColor p-4 rounded shadow-md">
                <h3 className="text-sm font-medium text-gray-700">
                  Add New Transaction
                </h3>
                <p className="text-xs text-gray-500 mt-2">
                  Record a new transaction with details.
                </p>
                <button
                  onClick={() => setIsTransactionDialogOpen(true)}
                  className="mt-4 bg-primaryGreen text-white px-4 py-2 rounded w-full"
                >
                  Add Transaction
                </button>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Dialog for Adding User */}
      <Dialog open={isUserDialogOpen} onOpenChange={setIsUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primaryGreen">Add New User</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={userFormData.name}
              onChange={handleUserInputChange}
              placeholder="Name"
              className="mt-1 p-2 border rounded w-full"
            />
            <input
              type="email"
              name="email"
              value={userFormData.email}
              onChange={handleUserInputChange}
              placeholder="Email"
              className="mt-1 p-2 border rounded w-full"
            />
            <input
              type="tel"
              name="mobile"
              value={userFormData.mobile}
              onChange={handleUserInputChange}
              placeholder="Mobile"
              className="mt-1 p-2 border rounded w-full"
            />
          </div>
          <DialogFooter>
            <Button
              onClick={handleSaveUser}
              className="bg-primaryGreen text-white"
            >
              Save User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Dialog for Adding Transaction */}
      <Dialog
        open={isTransactionDialogOpen}
        onOpenChange={setIsTransactionDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-primaryGreen">Add New Transaction</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {/* Donator's Name Input */}
            <div>
              <label className="block text-sm font-medium text-primaryGreen">
                Donator's Name
              </label>
              <input
                type="text"
                name="donatorName"
                value={transactionFormData.donatorName || ""} // Ensure donatorName exists in the state
                onChange={handleTransactionInputChange}
                placeholder="Enter donator's name"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium text-primaryGreen">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={transactionFormData.amount || ""} // Ensure amount exists in the state
                onChange={handleTransactionInputChange}
                placeholder="Enter amount"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>

            {/* Description Input */}
            <div>
              <label className="block text-sm font-medium text-primaryGreen">
                Description
              </label>
              <input
                type="text"
                name="description"
                value={transactionFormData.description || ""} // Ensure description exists in the state
                onChange={handleTransactionInputChange}
                placeholder="Enter description"
                className="mt-1 p-2 border rounded w-full"
              />
            </div>
          </div>

          {/* Dialog Footer */}
          <DialogFooter>
            <Button
              onClick={handleSaveTransaction}
              className="bg-primaryGreen text-white mt-4 hover:bg-green-700"
            >
              Save Transaction
            </Button>
            <Button
              onClick={() => setIsTransactionDialogOpen(false)}
              variant="secondary"
              className="bg-tomato hover:bg-red-400 text-whiteColor"
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminDashboard;
