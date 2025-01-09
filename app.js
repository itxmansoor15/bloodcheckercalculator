function checkCompatibility() {
    const bloodType = document.getElementById("bloodType").value;
    let compatibleTypes;

    switch (bloodType) {
        case "A+":
            compatibleTypes = "A+, A-, O+, O-";
            break;
        case "A-":
            compatibleTypes = "A-, O-";
            break;
        case "B+":
            compatibleTypes = "B+, B-, O+, O-";
            break;
        case "B-":
            compatibleTypes = "B-, O-";
            break;
        case "AB+":
            compatibleTypes = "AB+, AB-, A+, A-, B+, B-, O+, O-";
            break;
        case "AB-":
            compatibleTypes = "AB-, A-, B-, O-";
            break;
        case "O+":
            compatibleTypes = "O+, O-";
            break;
        case "O-":
            compatibleTypes = "O-";
            break;
        default:
            compatibleTypes = "Unknown blood type";
    }

    document.getElementById("result").innerText = `Compatible blood types: ${compatibleTypes}`;
}