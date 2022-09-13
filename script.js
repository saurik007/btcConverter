function btcConverter() {
    let curPrice = document.getElementById("curPrice").value;
    let dolAmount = document.getElementById("dolAmount").value;

    document.getElementById("outputAmount").innerHTML=dolAmount/curPrice;
}