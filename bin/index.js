#!/usr/bin/env node

import chalk from 'chalk';
import ora from 'ora';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import { createSpinner } from 'nanospinner';
import cliProgress from 'cli-progress';

// Romance-focused configuration
const LOVE_EMOJIS = ['💖', '💘', '💞', '💕', '❤️', '💓', '💗', '💝'];
const ROMANTIC_TERMS = ['love', 'forever', 'soulmate', 'destiny', 'together', 'happiness'];

// Hearts Animation
const hearts = [
    chalk.hex('#FF0000')('💖'),
    chalk.hex('#FF69B4')('💕'),
    chalk.hex('#FF1493')('💗')
];

async function celebrateName(name) {
    const animation = chalkAnimation.rainbow(
        figlet.textSync(`I Love You\n${name}!`, { horizontalLayout: 'full' })
    );
    await new Promise(resolve => setTimeout(resolve, 2000));
    animation.stop();
}

async function loveAnimation() {
    const loveFrames = [
        'const love = Infinity;',
        'function propose() { return "💍"; }',
        'while(life) { loveYou(); }',
        'try { forever(); } catch (e) { loveYouAnyway(); }'
    ];

    for (const frame of loveFrames) {
        console.log(gradient.passion(frame));
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

async function romanticWishes(name) {
    const wishes = [
        `You're the ${chalk.cyan('debugger')} to my bugs in life!`,
        `With you, every ${chalk.green('deployment')} of love is successful!`,
        `My ${chalk.yellow('heart')} has stronger connectivity with you than any ${chalk.blue('Wi-Fi')}!`,
        `You're the ${chalk.magenta('perfect match')} to my algorithm!`,
        `I want to ${chalk.cyan('git commit')} to you for life!`,
        `You bring ${chalk.green('99.999%')} uptime to my happiness!`,
        `You're the ${chalk.yellow('documentation')} that makes my life understandable!`,
        `I found the ${chalk.blue('perfect variable')} to my life equation—it's you!`,
        `My love for you has no ${chalk.magenta('stack overflow')}!`,
        `You give me ${chalk.green('infinite')} ${'💖'} power!`
    ];

    const wishSpinner = createSpinner('Generating feelings...').start();
    await new Promise(resolve => setTimeout(resolve, 1500));
    wishSpinner.success();

    for (const [index, wish] of wishes.entries()) {
        const styledWish = `${chalk.bold(`💌 Reason #${index + 1}:`)} ${wish}`;
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
        message: `${LOVE_EMOJIS[0]}  What's the name of your special someone?`,
        validate: input => input.trim() ? true : 'Please enter their name!',
    });

    // Proposal loader
    const spinner = ora({
        text: chalk.hex('#FF6B6B')('Preparing romantic gesture...'),
        spinner: 'hearts'
    }).start();

    // Simulated loading with progress bar
    await new Promise(resolve => setTimeout(resolve, 1500));
    spinner.stop();

    const progressBar = new cliProgress.SingleBar({
        format: 'Loading love |' + chalk.magenta('{bar}') + '| {percentage}%',
        barCompleteChar: '♥',
        barIncompleteChar: '·',
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
    await celebrateName(name);

    // Love animation
    console.log(gradient.passion('\n===== My Heart Belongs To You =====\n'));
    await loveAnimation();

    // Romantic wishes
    console.log(gradient.passion('\n💞 Why I Love You 💞'));
    await romanticWishes(name);

    // Final output
    console.log(gradient.cristal('\n💍 Will You Be Mine Forever? 💍'));
    console.log(chalk.magenta(`
  1. ${chalk.yellow('Morning:')} Wake up to your smile
  2. ${chalk.yellow('Afternoon:')} Share dreams together
  3. ${chalk.yellow('Evening:')} Build our future side by side
  4. ${chalk.yellow('Night:')} Fall asleep holding your hand
  `));

    // Final message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(gradient.passion('\n💝 I love you more than any code I\'ve ever written!'));
    console.log(chalk.hex('#FF69B4')('\nWill you say yes?\n'));
}

main();