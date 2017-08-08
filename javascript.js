var quotes = [
  'The biggest adventure you can take is to live the life of your dreams.',
  'Think like a queen. A queen is not afraid to fail. Failure is another steppingstone to greatness.',
  'The more you praise and celebrate your life, the more there is in life to celebrate.',
  'Turn your wounds into wisdom.',
  'Doing the best at this moment puts you in the best place for the next moment.',
  'The reason I\'ve been able to be so financially successful is my focus has never, ever for one minute been money',
  'You know you are on the road to success if you would do your job and not be paid for it',
  'The big secret in life is that there is no big secret. Whatever your goal, you can get there if you\'re willing to work',
  'With every experience, you alone are painting your own canvas, thought by thought, choice by choice',
  'Be thankful for what you have; you\'ll end up having more. If you concentrate on what you don\'t have, you will never, ever have enough',
  'Every time you state what you want or believe, you\'re the first to hear it. It\'s a message to both you and others about what you think is possible. Don\'t put a ceiling on yourself',
  'Create the highest, grandest vision possible for your life, because you become what you believe.',
  'Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.',
  'If you don\'t know what your passion is, realize that one reason for your existence on earth is to find it.',
  'Doing the best at this moment puts you in the best place for the next moment.',
  'Surround yourself with only people who are going to lift you higher',
  'We can\'t become what we need to be by remaining what we are',
  'If I lost control of the business, I\'d lose myself--or at least the ability to be myself. Owning myself is a way to be myself.',
  'Passion is energy. Feel the power that comes from focusing on what excites you',
  'When you undervalue what you do, the world will undervalue who you are.',
  'You can have it all. Just not all at once.',
  'Real integrity is doing the right thing, knowing that nobody\'s going to know whether you did it or not',
  'One of the hardest things in life to learn are which bridges to cross and which bridges to burn',
  'Challenges are gifts that force us to search for a new center of gravity. Don’t fight them. Just find a new way to stand.',
  'The thing you fear most has no power. Your fear of it is what has the power. Facing the truth really will set you free.',
  'Everyone wants to ride with you in the limo, but what you want is someone who will take the bus with you when the limo breaks down.',
  'The greatest discovery of all time is that a person can change his future by merely changing his attitude.',
  'Excellence is the best deterrent to racism or sexism.'
]

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
