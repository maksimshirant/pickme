export const calculateCreditPayment = (creditAmount: string, selectedMonth: number): number | null => {
   const amount = parseFloat(creditAmount);
   if (!isNaN(amount)) {
      const monthlyPayment = amount / selectedMonth;
      return Math.round(monthlyPayment);
   }
   return null;
};
