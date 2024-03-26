interface IPaymentInstrument {
  validate(): void;
  collectPayment(): void;
}

export default IPaymentInstrument