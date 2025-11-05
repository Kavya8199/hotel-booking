import React from 'react'

const UsersList = () => {
  const users = [
    {
      name: "David Wagner",
      email: "david_wagner@example.com",
      date: "24 Jun, 2023",
      role: "Super Admin",
      status: "owner",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/71q6BGj9ra.png",
        delete: "https://static.codia.ai/image/2025-10-28/S8r5ZKB0Fy.png"
      }
    },
    {
      name: "Ina Hogan",
      email: "windler.warren@runte.net",
      date: "24 Aug, 2023",
      role: "Owner",
      status: "owner",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/WFq18PtHSj.png",
        delete: "https://static.codia.ai/image/2025-10-28/xgn1xMMLZV.png"
      }
    },
    {
      name: "Devin Harmon",
      email: "wintheiser_enos@yahoo.com",
      date: "18 Dec, 2023",
      role: "Owner",
      status: "owner",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/9HV8nm1tDS.png",
        delete: "https://static.codia.ai/image/2025-10-28/0aNhmQR9zs.png"
      }
    },
    {
      name: "Lena Page",
      email: "camila_ledner@gmail.com",
      date: "8 Otc, 2023",
      role: "Pending",
      status: "pending",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/4g1bh1EkEX.png",
        delete: "https://static.codia.ai/image/2025-10-28/ZZ6hCUsoES.png"
      }
    },
    {
      name: "Eula Horton",
      email: "edula_dorton1221@gmail.com",
      date: "15 Jun, 2023",
      role: "Owner",
      status: "owner",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/w2oux8J854.png",
        delete: "https://static.codia.ai/image/2025-10-28/ee4EnYi9gH.png"
      }
    },
    {
      name: "Victoria Perez",
      email: "terrill.wiza@hotmail.com",
      date: "12 July, 2023",
      role: "Owner",
      status: "owner",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/sZSp8L2XWY.png",
        delete: "https://static.codia.ai/image/2025-10-28/XtsrGDPHQX.png"
      }
    },
    {
      name: "Cora Medina",
      email: "hagenes.isai@hotmail.com",
      date: "21 July, 2023",
      role: "Pending",
      status: "pending",
      actions: {
        edit: "https://static.codia.ai/image/2025-10-28/L5aevqMaUR.png",
        delete: "https://static.codia.ai/image/2025-10-28/yKi3wwSd3M.png"
      }
    }
  ]

  return (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-700">List Hotel Owners</h3>
      </div>

      <div className="bg-gray-200 px-5 py-4">
        <div className="grid grid-cols-12 gap-4 text-sm font-semibold text-gray-400">
          <div className="col-span-4">Name</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-3">Create Date</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-1">Action</div>
        </div>
      </div>

      <div className="divide-y divide-gray-100">
        {users.map((user, index) => (
          <div key={index} className="px-5 py-4">
            <div className="grid grid-cols-12 gap-4 items-center">
              <div className="col-span-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-700 text-sm">{user.name}</p>
                    <p className="text-gray-400 text-sm">{user.email}</p>
                  </div>
                </div>
              </div>
              
              <div className="col-span-2">
                <span className={`inline-flex px-4 py-1 rounded-lg text-sm font-semibold ${
                  user.status === 'owner' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {user.role}
                </span>
              </div>
              
              <div className="col-span-3">
                <span className="text-gray-700 text-sm">{user.date}</span>
              </div>
              
              <div className="col-span-2">
                <span className="text-gray-700 text-sm">Lorem Ipsum</span>
              </div>
              
              <div className="col-span-1">
                <div className="flex items-center space-x-2">
                  <img 
                    src={user.actions.edit} 
                    alt="Edit" 
                    className="w-5 h-5 cursor-pointer"
                  />
                  <img 
                    src={user.actions.delete} 
                    alt="Delete" 
                    className="w-5 h-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <span>Items per page:</span>
            <div className="flex items-center space-x-1 bg-gray-100 px-2 py-1 rounded">
              <span>6</span>
              <img 
                src="https://static.codia.ai/image/2025-10-28/eYgfN4Kf9Y.png" 
                alt="Dropdown" 
                className="w-2 h-2"
              />
            </div>
          </div>
          
          <span>1-4 of 10</span>
          
          <div className="flex items-center space-x-2">
            <img 
              src="https://static.codia.ai/image/2025-10-28/PHipJ7kJMj.png" 
              alt="Previous" 
              className="w-2 h-2 cursor-pointer"
            />
            <img 
              src="https://static.codia.ai/image/2025-10-28/fyarP169oD.png" 
              alt="Next" 
              className="w-2 h-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UsersList
