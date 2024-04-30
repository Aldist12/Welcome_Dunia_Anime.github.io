document.getElementById('transactionForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Retrieve form inputs
    var sender = document.getElementById('sender').value;
    var receiver = document.getElementById('receiver').value;
    var amount = document.getElementById('amount').value;
    
    // Validate inputs
    if (sender.trim() === '' || receiver.trim() === '' || amount.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    
    if (amount <= 0) {
      alert('Amount must be greater than zero.');
      return;
    }
    
    // Process transaction
    // Add your logic here to handle the transaction, e.g., sending an AJAX request to the server
    
    // Clear form inputs
    document.getElementById('sender').value = '';
    document.getElementById('receiver').value = '';
    document.getElementById('amount').value = '';
  });
  