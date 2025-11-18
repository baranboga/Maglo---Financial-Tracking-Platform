import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "@/lib/api/dashboard";
import Sidebar from "@/components/layout/Sidebar/Sidebar";
import Header from "@/components/layout/Header/Header";
import { formatCurrency } from "@/lib/utils/formatCurrency";
import { format } from "date-fns";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import walletYellow from "@/assets/images/dashboard/wallet-yellow.png";
import walletBlack from "@/assets/images/dashboard/wallet-black.png";
import walletAdd from "@/assets/images/dashboard/wallet-add.png";
import cardSimIcon from "@/assets/images/dashboard/creditCard/cardSim.png";
import wifiIcon from "@/assets/images/dashboard/creditCard/wifi.png";
import visaIcon from "@/assets/images/dashboard/creditCard/visa.png";
import masterIcon from "@/assets/images/dashboard/creditCard/master.png";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data: summary, isLoading: summaryLoading } = useQuery({
    queryKey: ["financial-summary"],
    queryFn: dashboardApi.getSummary,
  });

  const { data: workingCapital, isLoading: workingCapitalLoading } = useQuery({
    queryKey: ["working-capital"],
    queryFn: dashboardApi.getWorkingCapital,
  });

  const { data: wallet, isLoading: walletLoading } = useQuery({
    queryKey: ["wallet"],
    queryFn: dashboardApi.getWallet,
  });

  const { data: transactions, isLoading: transactionsLoading } = useQuery({
    queryKey: ["recent-transactions"],
    queryFn: () => dashboardApi.getRecentTransactions(20),
  });

  const { data: scheduledTransfers, isLoading: transfersLoading } = useQuery({
    queryKey: ["scheduled-transfers"],
    queryFn: dashboardApi.getScheduledTransfers,
  });

  const isLoading =
    summaryLoading ||
    workingCapitalLoading ||
    walletLoading ||
    transactionsLoading ||
    transfersLoading;

  const chartData =
    workingCapital?.data.map((item) => ({
      month: item.month,
      income: item.income,
      expense: item.expense,
      net: item.net,
    })) || [];

  if (isLoading) {
    return (
      <div className="flex h-screen bg-gray-50">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <div className="flex-1 p-8">
            <div className="animate-pulse space-y-6">
              <div className="h-8 bg-gray-200 rounded w-48"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
            <div className="lg:col-span-4 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-3.5 text-white sm:col-span-2 lg:col-span-1 h-[85px]">
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <img
                        src={walletYellow}
                        alt="Wallet"
                        className="w-5 h-5"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-400 text-xs mb-1">
                        Total balance
                      </div>
                      <div className="text-xl font-bold leading-tight">
                        {summary?.totalBalance?.amount
                          ? formatCurrency(
                              summary.totalBalance.amount,
                              summary.totalBalance.currency
                            )
                          : formatCurrency(0)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-gray-200 h-[85px]">
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={walletBlack} alt="Wallet" className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-500 text-xs mb-1">
                        Total spending
                      </div>
                      <div className="text-xl font-bold text-gray-900 leading-tight">
                        {summary?.totalExpense?.amount
                          ? formatCurrency(
                              summary.totalExpense.amount,
                              summary.totalExpense.currency
                            )
                          : formatCurrency(0)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-3.5 border border-gray-200 h-[85px]">
                  <div className="flex items-center gap-3 h-full">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <img src={walletAdd} alt="Wallet" className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-gray-500 text-xs mb-1">
                        Total saved
                      </div>
                      <div className="text-xl font-bold text-gray-900 leading-tight">
                        {summary?.totalSavings?.amount
                          ? formatCurrency(
                              summary.totalSavings.amount,
                              summary.totalSavings.currency
                            )
                          : formatCurrency(0)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    Working Capital
                  </h2>
                  <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 text-gray-700">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 90 days</option>
                  </select>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#29A073" }}
                    ></div>
                    <span className="text-sm text-gray-600">Income</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#C8EE44" }}
                    ></div>
                    <span className="text-sm text-gray-600">Expense</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: "#FF9F40" }}
                    ></div>
                    <span className="text-sm text-gray-600">Net</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis
                      dataKey="month"
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      tickLine={{ stroke: "#e5e7eb" }}
                    />
                    <YAxis
                      tick={{ fill: "#6b7280", fontSize: 12 }}
                      tickLine={{ stroke: "#e5e7eb" }}
                      tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
                    />
                    <Tooltip
                      formatter={(value: number) =>
                        `₺${value.toLocaleString()}`
                      }
                      contentStyle={{
                        backgroundColor: "white",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                        padding: "8px 12px",
                      }}
                    />
                    <Legend
                      wrapperStyle={{ paddingTop: "20px" }}
                      iconType="circle"
                    />
                    <Line
                      type="monotone"
                      dataKey="income"
                      name="Income"
                      stroke="#29A073"
                      strokeWidth={2}
                      dot={{ fill: "#29A073", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="expense"
                      name="Expense"
                      stroke="#C8EE44"
                      strokeWidth={2}
                      dot={{ fill: "#C8EE44", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="net"
                      name="Net"
                      stroke="#FF9F40"
                      strokeWidth={2}
                      dot={{ fill: "#FF9F40", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    Recent Transaction
                  </h2>
                  <button
                    className="text-sm font-bold text-[#29A073] hover:text-[#29A073]
"
                  >
                    View All &gt;
                  </button>
                </div>
                {transactions && transactions.length > 0 ? (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                            NAME/BUSINESS
                          </th>
                          <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase hidden sm:table-cell">
                            TYPE
                          </th>
                          <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase">
                            AMOUNT
                          </th>
                          <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase hidden md:table-cell">
                            DATE
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions.slice(0, 5).map((transaction) => (
                          <tr
                            key={transaction.id}
                            className="border-b border-gray-100"
                          >
                            <td className="py-4">
                              <div className="flex items-center gap-3">
                                {transaction.image ? (
                                  <img
                                    src={transaction.image}
                                    alt={transaction.name}
                                    className="w-8 h-8 rounded object-cover"
                                  />
                                ) : transaction.icon ? (
                                  <div
                                    className="w-8 h-8 rounded flex items-center justify-center text-white text-xs font-semibold"
                                    style={{
                                      backgroundColor:
                                        transaction.icon.includes("red")
                                          ? "#ef4444"
                                          : transaction.icon.includes("pink")
                                          ? "#ec4899"
                                          : "#3b82f6",
                                    }}
                                  >
                                    {transaction.name.charAt(0).toUpperCase()}
                                  </div>
                                ) : (
                                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                    <span className="text-xs font-medium text-gray-600">
                                      {transaction.name.charAt(0).toUpperCase()}
                                    </span>
                                  </div>
                                )}
                                <div>
                                  <div className="text-sm font-medium text-gray-900">
                                    {transaction.name}
                                  </div>
                                  <div className="text-xs text-gray-500">
                                    {transaction.business}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 hidden sm:table-cell">
                              <span className="text-sm text-gray-600">
                                {transaction.type}
                              </span>
                            </td>
                            <td className="py-4">
                              <span className="text-sm font-semibold text-gray-900">
                                {formatCurrency(transaction.amount)}
                              </span>
                            </td>
                            <td className="py-4 hidden md:table-cell">
                              <span className="text-sm text-gray-600">
                                {format(
                                  new Date(transaction.date),
                                  "dd MMM yyyy"
                                )}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm text-center py-8">
                    No recent transactions
                  </p>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              <div className="bg-white rounded-xl p-4 md:p-5 border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Wallet</h2>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                      />
                    </svg>
                  </button>
                </div>
                {wallet && wallet.cards && wallet.cards.length > 0 ? (
                  <div className="relative">
                    {wallet.cards.map((card, index) => {
                      const maskedNumber =
                        index > 0
                          ? `${card.cardNumber.slice(0, 9)}****`
                          : card.cardNumber;
                      const expiryDate = `${String(card.expiryMonth).padStart(
                        2,
                        "0"
                      )}/${String(card.expiryYear).slice(-2)}`;

                      return (
                        <div
                          key={card.id}
                          className={`rounded-xl p-5 relative overflow-hidden ${
                            index > 0 ? "-mt-12 ml-6 opacity-80" : "opacity-90"
                          }`}
                          style={{
                            background:
                              index === 0
                                ? "linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #2d2d2d 100%)"
                                : "#f3f4f6",
                            color: index === 0 ? "#ffffff" : "#374151",
                          }}
                        >
                          <div className="flex items-start justify-between mb-6">
                            <div>
                              <div
                                className={`text-xs mb-1 ${
                                  index === 0
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }`}
                              >
                                {card.bank}
                              </div>
                              <img
                                src={cardSimIcon}
                                alt="Card Sim"
                                className="w-8 h-10 mt-2 object-contain"
                              />
                            </div>
                            <img
                              src={wifiIcon}
                              alt="Contactless"
                              className={`w-6 h-6 ${
                                index === 0 ? "opacity-80" : "opacity-60"
                              }`}
                            />
                          </div>

                          <div
                            className={`text-base font-mono mb-4 tracking-wider ${
                              index === 0 ? "text-white" : "text-gray-700"
                            }`}
                          >
                            {maskedNumber}
                          </div>

                          <div className="flex items-center justify-between">
                            <div
                              className={`text-xs ${
                                index === 0 ? "text-gray-300" : "text-gray-500"
                              }`}
                            >
                              {expiryDate}
                            </div>
                            {index === 0 ? (
                              <div className="relative">
                                <div className="absolute inset-0 blur-md opacity-40">
                                  <img
                                    src={masterIcon}
                                    alt="Mastercard"
                                    className="h-8"
                                  />
                                </div>
                                <img
                                  src={masterIcon}
                                  alt="Mastercard"
                                  className="h-8 relative"
                                />
                              </div>
                            ) : card.network.toLowerCase() === "visa" ? (
                              <img src={visaIcon} alt="Visa" className="h-5" />
                            ) : card.network.toLowerCase() === "mastercard" ? (
                              <img
                                src={masterIcon}
                                alt="Mastercard"
                                className="h-5"
                              />
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    No cards available
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl p-4 md:p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-900">
                    Scheduled Transfers
                  </h2>
                  <button
                    className="text-sm font-bold text-[#29A073] hover:text-[#29A073]
"
                  >
                    View All &gt;
                  </button>
                </div>
                {scheduledTransfers && scheduledTransfers.length > 0 ? (
                  <div className="space-y-4">
                    {scheduledTransfers.slice(0, 5).map((transfer) => (
                      <div
                        key={transfer.id}
                        className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={transfer.image}
                            alt={transfer.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {transfer.name}
                            </div>
                            <div className="text-xs text-gray-500">
                              <span className="hidden md:inline">
                                {format(
                                  new Date(transfer.date),
                                  "MMMM dd, yyyy 'at' HH:mm"
                                )}
                              </span>
                              <span className="md:hidden">
                                {format(
                                  new Date(transfer.date),
                                  "MMM dd, yyyy"
                                )}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-900">
                          {transfer.amount < 0 ? "-" : "+"} {transfer.currency}
                          {Math.abs(transfer.amount).toLocaleString("en-US", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm text-center py-8">
                    No scheduled transfers
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
