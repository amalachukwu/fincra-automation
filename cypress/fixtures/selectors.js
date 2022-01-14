
export const login = {
    emailAddressText: '[data-testid="email"]',
    emailAddressInput:'qa@testing.com',
    passwordText:'[data-testid="password"]',
    passwordInput:'Password1!',
    wrongPassword:'book',
    keepMeIn:'.space-x-2 > .text-sm',
    logInButton:'[data-testid="login"]'
}

export const overview ={
    overviewChecker:'.pb-2 > .flex > .items-center',
    requestAccount:':nth-child(1) > .p-4 > .flex > .ml-4 > .font-medium',
    fundWallet:'.grid > :nth-child(2) > .p-4 > .flex > .ml-4 > .font-medium',
    payout:':nth-child(3) > .flex > .ml-4 > .font-medium',
    support:':nth-child(4) > .flex > .ml-4 > .font-medium',
    yourBalance:':nth-child(4) > .flex > .ml-4 > .font-medium',

}

export const signout ={

    signoutNavba:'[filter="url(#filter01234_d)"] > [width="193"]',
    signoutConfrimationChecker:'.text-md',
    sigoutButton:'.space-x-4 > .bg-secondary',
    signoutChecker:'.mt-2',
    cancelSignoutButton:'.bg-purple-100',
    cancelSignoutChecker:'.py-4 > :nth-child(1) > .flex',
}
