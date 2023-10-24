import _ from 'lodash';

import Receipt from '../types/Receipt';

type ReceiptPrinterProps = {
  receipt: Receipt;
}

export default function ReceiptPrinter({ receipt }: ReceiptPrinterProps) {
  if (_.isEmpty(receipt)) {
    return <p>[영수증 나오는 곳]</p>;
  }

  const { id, menu, totalPrice } = receipt;
  return (
    <div>
      <h2>영수증</h2>
      <div>
        <h3>주문번호</h3>
        <p>{id}</p>
      </div>
      <div>
        <h3>주문목록</h3>
        <ul>
          {menu.map((food, index) => {
            const key = `${food.id}=${index}`;

            return (
              <li key={key}>
                {food.name}
                (
                {food.price.toLocaleString()}
                원)
              </li>
            );
          })}
        </ul>
      </div>
      <p>
        총 가격:
        {' '}
        {totalPrice.toLocaleString()}
        원
      </p>
    </div>
  );
}