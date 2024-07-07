import inquirer from 'inquirer';
import { differenceInSeconds } from 'date-fns';
let res = await inquirer.prompt([
    {
        name: "Userinput",
        type: "input",
        message: "Set a time:"
    }
]);
let input = res.Userinput;
function Timerstart(digit) {
    const inttime = new Date().setSeconds(new Date().getSeconds() + digit);
    const intervalTime = new Date(inttime);
    setInterval((() => {
        const currTime = new Date();
        const timediff = differenceInSeconds(intervalTime, currTime);
        if (timediff <= 0) {
            console.log("Time's up!");
            process.exit;
        }
        const min = Math.floor((timediff % (3600 * 24)) / 3600);
        const sec = Math.floor(timediff % 60);
        console.log(`${min}:${sec}`);
    }), 1000);
}
Timerstart(input);
