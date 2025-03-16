import React from 'react';
import st from './PaymentResult.module.scss';
import Button from '../UI/Button/Button';

interface PaymentResultProps {
   payment: number | null;
   isMonthly: boolean;
   onTogglePaymentType: () => void;
}

const PaymentResult: React.FC<PaymentResultProps> = ({ payment, isMonthly, onTogglePaymentType }) => {
   const formattedPayment = payment ? payment.toLocaleString('ru-RU') : '0';

   if (payment === null) return null;

   return (
      <div className={st.resultBlock}>
         <p className={st.title}>Итого ваш платеж по кредиту:</p>
         <div className={st.paymentTypeToggle}>
            <Button
               className={`${st.toggleBtn} ${!isMonthly ? st.active : ''}`}
               onClick={onTogglePaymentType}
            >
               в год
            </Button>
            <Button
               className={`${st.toggleBtn} ${isMonthly ? st.active : ''}`}
               onClick={onTogglePaymentType}
            >
               в месяц
            </Button>
         </div>
         <p className={st.result}>
            {isMonthly ? formattedPayment : (payment * 12).toLocaleString('ru-RU')} рублей
         </p>
      </div>
   );
};

export default PaymentResult;
