import React from "react";
import { Bell, Clock, AlertCircle, MoreHorizontal } from "lucide-react";

const Notifications = () => {
  // Sample data - in a real app, this would come from props or a data store
  const overdueComms = [
    {
      id: 1,
      company: "InnovateNow",
      type: "Phone Call",
      dueDate: "2024-12-25",
      description: "Quarterly review call with client stakeholders",
      priority: "high",
    },
    {
      id: 2,
      company: "TechVision Corp",
      type: "LinkedIn Post",
      dueDate: "2024-12-26",
      description: "Share product launch announcement",
      priority: "medium",
    },
  ];

  const todayComms = [
    {
      id: 3,
      company: "Digital Dynamics",
      type: "LinkedIn Message",
      dueDate: "2024-12-28",
      description: "Send connection request and introduction",
      priority: "low",
    },
    {
      id: 4,
      company: "Global Solutions",
      type: "Email",
      dueDate: "2024-12-28",
      description: "Follow up on partnership proposal",
      priority: "high",
    },
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case "LinkedIn Post":
        return "💬";
      case "LinkedIn Message":
        return "💭";
      case "Email":
        return "📧";
      case "Phone Call":
        return "📞";
      default:
        return "📌";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50 border-red-200";
      case "medium":
        return "text-yellow-600 bg-yellow-50 border-yellow-200";
      case "low":
        return "text-green-600 bg-green-50 border-green-200";
      default:
        return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const NotificationCard = ({ comm, isOverdue }) => (
    <div className="p-4 hover:bg-gray-50 transition-colors group">
      <div className="flex items-start justify-between">
        <div className="space-y-2 flex-grow">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl">{getTypeIcon(comm.type)}</span>
              <span className="font-medium text-gray-900">{comm.company}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(
                  comm.priority
                )}`}
              >
                {comm.priority.charAt(0).toUpperCase() + comm.priority.slice(1)}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded-full hover:bg-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
          <p className="text-sm text-gray-600">{comm.description}</p>
          <div className="flex items-center justify-between">
            <span
              className={`text-sm ${
                isOverdue ? "text-red-600" : "text-gray-500"
              } font-medium`}
            >
              {isOverdue ? "Overdue: " : "Due: "}
              {new Date(comm.dueDate).toLocaleDateString()}
            </span>
            {!isOverdue && (
              <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors">
                Mark Complete
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header with notification count */}
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Bell className="h-6 w-6 text-blue-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                Notifications
              </h2>
              <p className="text-sm text-gray-600">
                Track your communication tasks
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium">
              {overdueComms.length} Overdue
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
              {todayComms.length} Due Today
            </span>
          </div>
        </div>
      </div>

      {/* Overdue Communications */}
      <div className="bg-white rounded-lg shadow-sm border border-red-100">
        <div className="p-4 border-b border-red-100 bg-red-50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <h3 className="text-lg font-semibold text-red-800">
              Overdue Communications
            </h3>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {overdueComms.map((comm) => (
            <NotificationCard key={comm.id} comm={comm} isOverdue={true} />
          ))}
          {overdueComms.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No overdue communications
            </div>
          )}
        </div>
      </div>

      {/* Today's Communications */}
      <div className="bg-white rounded-lg shadow-sm border border-yellow-100">
        <div className="p-4 border-b border-yellow-100 bg-yellow-50 rounded-t-lg">
          <div className="flex items-center space-x-2">
            <Clock className="h-5 w-5 text-yellow-600" />
            <h3 className="text-lg font-semibold text-yellow-800">Due Today</h3>
          </div>
        </div>
        <div className="divide-y divide-gray-100">
          {todayComms.map((comm) => (
            <NotificationCard key={comm.id} comm={comm} isOverdue={false} />
          ))}
          {todayComms.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              No communications due today
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notifications;
