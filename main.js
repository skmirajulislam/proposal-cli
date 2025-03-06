import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import cliProgress from 'cli-progress';

// Developer-focused configuration
const DEVELOPER_EMOJIS = ['💻', '🚀', '🎂', '🐛', '☕', '⚡', '🎯', '🔑'];
const TECHNICAL_TERMS = ['compile', 'debug', 'deploy', 'commit', 'merge', 'refactor'];

// Fireworks Animation
const firework = [
    chalk.hex('#FF0000')('✨'),
    chalk.hex('#FFA500')('✧'),
    chalk.hex('#FFFF00')('✦')
];

async function celebrateName(name) {
    const animation = chalkAnimation.rainbow(
        figlet.textSync(name, { horizontalLayout: 'full' })
    );
    await new Promise(resolve => setTimeout(resolve, 2000));
    animation.stop();
}

async function codeAnimation() {
    const codeFrames = [
        'const happiness = 100;',
        'function celebrate() { return "🎉"; }',
        'while(life) { keepCoding(); }',
        'try { enjoy(); } catch (e) { debug(e); }'
    ];

    for (const frame of codeFrames) {
        console.log(gradient.atlas(frame));
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function developerWishes(name) {
    const wishes = [
        `May your code ${chalk.cyan('deploy')} on the first try!`,
        `Wishing you ${chalk.green('bug-free')} production deployments!`,
        `May your ${chalk.yellow('coffee')} be strong and your ${chalk.blue('Wi-Fi')} stronger!`,
        `Here's to ${chalk.magenta('zero')} failed tests in your CI/CD pipeline!`,
        `May you always ${chalk.cyan('git push')} with confidence!`,
        `Wishing you ${chalk.green('99.999%')} uptime in all your services!`,
        `May your ${chalk.yellow('documentation')} always match your code!`,
        `Here's to finding ${chalk.blue('perfect variable names')} on the first try!`,
        `May your ${chalk.magenta('stack overflow')} searches always yield answers!`,
        `Wishing you ${chalk.green('infinite')} ${'🐛'} power!`
    ];

    const wishSpinner = createSpinner('Generating custom wishes...').start();
    await new Promise(resolve => setTimeout(resolve, 1500));
    wishSpinner.success();

    for (const [index, wish] of wishes.entries()) {
        const styledWish = `${chalk.bold(`🎯 Wish #${index + 1}:`)} ${wish}`;
        console.log(`\n${styledWish}`);
        await new Promise(resolve => setTimeout(resolve, 800));
    }
}

async function main() {
    console.clear();

    // Get name with Inquirer
    const { name } = await inquirer.prompt({
        type: 'input',
        name: 'name',
        message: `${DEVELOPER_EMOJIS[4]}  Who's celebrating a bug-free birthday?`,
        validate: input => input.trim() ? true : 'Please enter a name!',
    });

    // Celebration loader
    const spinner = ora({
        text: chalk.hex('#FF6B6B')('Initializing celebration protocol...'),
        spinner: 'dots'
    }).start();

    // Simulated loading with progress bar
    await new Promise(resolve => setTimeout(resolve, 1500));
    spinner.stop();

    const progressBar = new cliProgress.SingleBar({
        format: 'Loading awesomeness |' + chalk.cyan('{bar}') + '| {percentage}%',
        barCompleteChar: '█',
        barIncompleteChar: '░',
        hideCursor: true,
    });

    progressBar.start(100, 0);
    for (let i = 0; i <= 100; i++) {
        await new Promise(resolve => setTimeout(resolve, 20));
        progressBar.update(i);
    }
    progressBar.stop();

    console.clear();

    // Animated name
    await celebrateName(`Happy Birthday\n${name}!`);

    // Code animation
    console.log(gradient.pastel('\n===== Birthday Code Review Approved =====\n'));
    await codeAnimation();

    // Developer wishes
    console.log(gradient.instagram('\n🚀 Special Developer Wishes 🚀'));
    await developerWishes(name);

    // Final output
    console.log(gradient.mind('\n🎂 Birthday Master Plan:'));
    console.log(chalk.cyan(`
  1. ${chalk.yellow('Morning:')} Merge coffee ☕ with breakfast
  2. ${chalk.yellow('Afternoon:')} Deploy cake 🎂 to production
  3. ${chalk.yellow('Evening:')} Optimize happiness algorithms
  4. ${chalk.yellow('Night:')} Debug sleep schedule
  `));

    // Final message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(gradient.rainbow('\n🎉 Thanks for being an awesome developer!'));
    console.log(chalk.hex('#FF69B4')('\nMay your year be filled with successful commits!\n'));
}

main();