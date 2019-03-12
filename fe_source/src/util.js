const tall = 168;

export const calBMI = (weight, height = tall) => {
    if (!weight) {
        return 0;
    }

    return weight / (height * height / 10000);
}

export const getBMIColor = (bmi) => {
    if (bmi >= 18.5 && bmi <= 23.9) {
        return 'green';
    }
    if (bmi < 18.5) {
        return '#1890ff';
    }
    return 'orange';
}
