const balance = 100; // Current account balance
const withdrawalAmount = 300; // Amount to withdraw

if (withdrawalAmount <= balance) {
    console.log(`Withdrawal successful! You withdrew $${withdrawalAmount}.`);
    console.log(`New balance: $${balance - withdrawalAmount}`);
} else {
    console.log('Insufficient funds. Withdrawal denied.');
    console.log(`Your balance is $${balance}.`);
}