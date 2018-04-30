const Routes = [
	{
        title: 'Introduction',
        url: 'introduction'
    },
    {
        title: 'Integrity Hash Rules',
        url: 'integrity-hash-rules'
    },
    {
        title: 'Step 1: Create payment request parameters and values on your server',
        url: 'step1'
    },
    {
        title: 'Step 2: Sort all parameters using their ASCII value',
        url: 'step2'
    },
    {
        title: 'Step 3: Concatenate the values in order of your sorted keys',
        url: 'step3'
    },
    {
        title: 'Step 4: Create a full string to be hashed by concatenating the result from Step 3 with your secret key',
        url: 'step4'
    },
    {
        title: 'Step 5: Generate a sha256 hash of the hashstring and send to your Client page',
        url: 'step5'
    },
    {
        title: 'Introduction',
        url: 'error'
    },
]

export default Routes
