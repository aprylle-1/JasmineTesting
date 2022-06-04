describe('Helpers test (with setup and tear-down)', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    })

    it('should return correct total Payments on sumPaymentTotal()', function(){
        submitPaymentInfo();
        billAmtInput.value = 1000;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(1100);
    })

    it('should return correct total Tips on sumPaymentTotal()', function(){
        submitPaymentInfo();
        billAmtInput.value = 1000;
        tipAmtInput.value = 100;
        submitPaymentInfo();
        expect(sumPaymentTotal('tipAmt')).toEqual(110);
    })

    it('should calculate correct tip percent on calculateTipPercent()', function(){
        submitPaymentInfo();
        expect(allPayments["payment1"]['tipPercent']).toEqual(10);
        billAmtInput.value = 1000;
        tipAmtInput.value = 500;
        submitPaymentInfo();
        expect(allPayments["payment2"]['tipPercent']).toEqual(50);
    })
    
    afterEach(function(){
      paymentTbody.innerHTML = "";
      allPayments = {};
      paymentId = 0;
      billAmtInput.value = "";
      tipAmtInput.value = "";
      let summaryBody = document.querySelector('#summaryTable tbody');
      summaryBody.innerHTML = "";
    })
  })