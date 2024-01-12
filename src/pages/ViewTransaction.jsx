// import React from 'react'
// import {checkToken} from '../utilities/users-services';

// function OrderHistoryPage() {
//   const handleCheckToken = async () => {
//     try {
//       const expDate = await checkToken()
//       console.log(expDate)
//     } catch (err) {
//       console.log(err)
//     }
//   }

//   return (
//     <div>
//       <h1>OrderHistoryPage</h1>
//       <button onClick={handleCheckToken}>Check Log In Expiration</button>
//     </div>
//   )
// }

// export default OrderHistoryPage

import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../utilities/globalContext';
import { checkToken } from '../utilities/users-services';

function CombinedComponent() {
  const { transactionHistory } = useGlobalContext();
  const [...history] = transactionHistory();

  // Function to handle checking the token expiration
  const handleCheckToken = async () => {
    try {
      const expDate = await checkToken();
      console.log(expDate);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CombinedComponentStyled>
      <HistoryStyled>
        <h2>Recent History</h2>
        {history.map((item) => {
          const { _id, title, amount, type } = item;
          return (
            <div key={_id} className="history-item">
              <p
                style={{
                  color: type === 'expense' ? 'red' : 'var(--color-green)',
                }}
              >
                {title}
              </p>
              <p
                style={{
                  color: type === 'expense' ? 'red' : 'var(--color-green)',
                }}
              >
                {type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`}
              </p>
            </div>
          );
        })}
      </HistoryStyled>
      <OrderHistoryStyled>
        <h1>History</h1>
        <button onClick={handleCheckToken}>Check Log In Expiration</button>
      </OrderHistoryStyled>
    </CombinedComponentStyled>
  );
}

const CombinedComponentStyled = styled.div`
  display: flex;
  gap: 2rem;
`;

const HistoryStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .history-item {
    background: #fcf6f9;
    border: 2px solid #ffffff;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    padding: 1rem;
    border-radius: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const OrderHistoryStyled = styled.div`
  h1 {
    margin-bottom: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    border: none;
    background-color: var(--primary-color);
    color: #fff;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--color-green);
    }
  }
`;

export default CombinedComponent;