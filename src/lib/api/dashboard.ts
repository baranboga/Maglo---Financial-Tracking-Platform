import { apiClient } from './client'

export interface FinancialSummaryItem {
  amount: number
  currency: string
  change: {
    percentage: number
    trend: 'up' | 'down'
  }
}

export interface FinancialSummary {
  totalBalance: FinancialSummaryItem
  totalExpense: FinancialSummaryItem
  totalSavings: FinancialSummaryItem
  lastUpdated: string
}

export interface FinancialSummaryResponse {
  success: boolean
  message: string
  data: FinancialSummary
}

export interface WorkingCapitalDataPoint {
  month: string
  income: number
  expense: number
  net: number
}

export interface WorkingCapital {
  period: string
  currency: string
  data: WorkingCapitalDataPoint[]
  summary: {
    totalIncome: number
    totalExpense: number
    netBalance: number
  }
}

export interface WorkingCapitalResponse {
  success: boolean
  message: string
  data: WorkingCapital
}

export interface Card {
  id: string
  name: string
  type: 'credit' | 'debit'
  cardNumber: string
  bank: string
  network: string
  expiryMonth: number
  expiryYear: number
  color: string
  isDefault: boolean
}

export interface Wallet {
  cards: Card[]
}

export interface WalletResponse {
  success: boolean
  message: string
  data: Wallet
}

export interface Transaction {
  id: string
  name: string
  business: string
  type: string
  amount: number
  date: string
  icon?: string
  image?: string
}

export interface RecentTransactionsResponse {
  success: boolean
  message: string
  data: {
    transactions: Transaction[]
  }
}

export interface ScheduledTransfer {
  id: string
  name: string
  image: string
  date: string
  amount: number
  currency: string
  status: 'scheduled' | 'completed' | 'cancelled'
}

export interface ScheduledTransfersResponse {
  success: boolean
  message: string
  data: {
    transfers: ScheduledTransfer[]
  }
}

export const dashboardApi = {
  getSummary: async (): Promise<FinancialSummary> => {
    const response = await apiClient.get<FinancialSummaryResponse>('/financial/summary')
    return response.data.data
  },

  getWorkingCapital: async (): Promise<WorkingCapital> => {
    const response = await apiClient.get<WorkingCapitalResponse>('/financial/working-capital')
    return response.data.data
  },

  getWallet: async (): Promise<Wallet> => {
    const response = await apiClient.get<WalletResponse>('/financial/wallet')
    return response.data.data
  },

  getRecentTransactions: async (limit: number = 20): Promise<Transaction[]> => {
    const response = await apiClient.get<RecentTransactionsResponse>(`/financial/transactions/recent?limit=${limit}`)
    return response.data.data.transactions
  },

  getScheduledTransfers: async (): Promise<ScheduledTransfer[]> => {
    const response = await apiClient.get<ScheduledTransfersResponse>('/financial/transfers/scheduled')
    return response.data.data.transfers
  },
}
