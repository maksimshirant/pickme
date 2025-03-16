import { FC } from 'react';
import st from './MonthSelector.module.scss'

interface MonthSelectorProps {
   setSelectedMonth: (month: number) => void;
   selectedMonth: number;
   content?: string;

}

const MonthSelector: FC<MonthSelectorProps> = ({ setSelectedMonth, selectedMonth, content }) => {
   const months = [12, 24, 36, 48]


   const handleTermSelect = (month: number) => {
      setSelectedMonth(month);

   };
   return (
      <div className={st.monthSelectorBlock}>
         <h3 className={st.subtitle}>{content}</h3>
         <div className={st.monthSelector}>
            {months.map(months => (
               <button
                  key={months}
                  className={`${st.monthBtn} ${selectedMonth === months ? st.active : ''}`}
                  onClick={() => handleTermSelect(months)}
               >
                  {months}
               </button>
            ))}
         </div>
      </div>
   );
};

export default MonthSelector;