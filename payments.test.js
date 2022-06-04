describe('Payments test (with setup and tear-down)', function(){
    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    })
    // it('should calculate tip percent correctly', function(){
    //   let billAmt = 100;
    //   let tipAmt = 10;
    //   expect(calculateTipPercent(billAmt, tipAmt)).toEqual(10);
    // })
  
    it('should return an object with Bill Amount, Tip Amount, and Tip % on createCurPayment()', function(){
      expect(createCurPayment()).toEqual({
        billAmt : '100',
        tipAmt : '10',
        tipPercent : 10
      })
    })
    it('should create a new payment record on appendPaymentTable()', function(){
      submitPaymentInfo();
      let currentPayment = document.querySelectorAll('#paymentTable tbody tr td');
      expect(currentPayment[0].innerHTML).toEqual('$100');
      expect(currentPayment[1].innerHTML).toEqual('$10');
      expect(currentPayment[2].innerHTML).toEqual('10%');
    })

    it("should not create a new row when invalid input on appendPaymentTable()", function(){
        billAmtInput.value = 'hello';
        tipAmtInput.value = 'hello';
        submitPaymentInfo();
        let currentPaymentTable = document.querySelectorAll("#paymentTable tbody tr");
        console.log(currentPaymentTable);
        expect(currentPaymentTable.length).toEqual(0);
    })
    it("should not create a new row when input is negative on appendPaymentTable()", function(){
        billAmtInput.value = -1500;
        tipAmtInput.value = -100;
        submitPaymentInfo();
        let currentPaymentTable = document.querySelectorAll("#paymentTable tbody tr");
        console.log(currentPaymentTable);
        expect(currentPaymentTable.length).toEqual(0);
    })
    // it('should create a new record on summaryTable on UpdateSummary()', function(){
    //     submitPaymentInfo();
    //     billAmtInput.value = 1000;
    //     tipAmtInput.value = 200;
    //     submitPaymentInfo();
    //     // let updatedSummary = document.querySelectorAll('#summaryTable tbody tr td');
    //     let updatedSummary = document.querySelectorAll('#summaryTable tbody tr td');
    //     expect(updatedSummary[0].innerHTML).toEqual('$1100');
    //     expect(updatedSummary[1].innerHTML).toEqual('$210');
    //     expect(updatedSummary[2].innerHTML).toEqual('15%');
    // })
    
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