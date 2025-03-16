import { FC, useState } from 'react';
import st from './CalcModal.module.scss';
import PaymentResult from '../PaymentResult/PaymentResult';
import MonthSelector from '../MonthSelector/MonthSelector';
import Button from '../UI/Button/Button';
import { calculateCreditPayment } from '../utils/calculatePayment';

const CalcModal: FC = () => {
   const [creditAmount, setCreditAmount] = useState<string>('');
   const [selectedMonth, setSelectedMonth] = useState<number>(12);
   const [payment, setPayment] = useState<number | null>(null);
   const [isMonthly, setIsMonthly] = useState<boolean>(true);

   const calculatePayment = () => {
      const paymentAmount = calculateCreditPayment(creditAmount, selectedMonth);
      if (paymentAmount !== null) {
         setPayment(paymentAmount);
      }
   };


   const togglePaymentType = () => {
      setIsMonthly((prev) => !prev);
   };

   return (
      <div>
         <h1 className={st.title}>Платежи по кредиту</h1>
         <h3 className={st.discription}>
            Введите сумму кредита и выберите срок, на который вы хотите его оформить. <br /> Мы автоматически
            рассчитаем для вас ежемесячный платеж, чтобы вы могли лучше спланировать свои финансы.
         </h3>
         <h3 className={st.subtitle}>Ваша сумма кредита</h3>
         <input
            className={st.input}
            value={creditAmount}
            type="text"
            placeholder="Введите данные"
            onChange={(e) => setCreditAmount(e.target.value)}
         />
         <Button
            className={st.btnCalc}
            onClick={calculatePayment}>
            Рассчитать
         </Button>
         <MonthSelector
            selectedMonth={selectedMonth}
            setSelectedMonth={setSelectedMonth}
            content="Количество месяцев?" />
         {payment !== null && (
            <PaymentResult
               payment={payment}
               isMonthly={isMonthly}
               onTogglePaymentType={togglePaymentType}
            />
         )}
         <Button disabled={false} className={st.addBtn}>Добавить</Button>
      </div>
   );
};

export default CalcModal;
