paypal.Button.render({

  env: 'sandbox',

  client: {
      sandbox:    'Acv4pfxY2qjQ9hA6-tWwRnyyet9AyWG2dWKKidld6mnW2XA3nEYbdC9oEbSv5MkMNpZOMdIxlC-3sCt8',
      production: 'xxxxxxxxx'
  },

  commit: true, // Show a 'Pay Now' button

  payment: function(data, actions) {
      return actions.payment.create({
          payment: {
              transactions: [
                  {
                      amount: { total: '15.00', currency: 'USD' }
                  }
              ]
          }
      });
  },

  onAuthorize: function(data, actions) {
      return actions.payment.execute().then(function(payment) {
        window.alert('Payment Complete!')
          // The payment is complete!
          // You can now show a confirmation message to the customer
      });
  }

}, '#paypal-button');