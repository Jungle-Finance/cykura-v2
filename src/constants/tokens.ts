import { PublicKey } from '@solana/web3.js'
import { Token } from '@cykura/sdk-core'

// TODO fetch tokens from a curated JSON file. Current approach gets ugly as more tokens are listed
// Mainnet TOKENS
export const JFI_MAIN = new Token(
    101,
    new PublicKey('GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs'),
    9,
    'JFI',
    'Jungle DeFi Governance Token'
)
export const I_JFI_Q4_MAIN = new Token(
    101,
    new PublicKey('iJF17JCu78E51eAgwtCwvgULHh2ZqCeRrcFP7wgcc6w'),
    9,
    'I-JFI-Q4',
    'I-JFI-Q4'
)
export const J_JFI_MAIN = new Token(
    101,
    new PublicKey('jJF1SrhzpyqYawE9ruSVKrHjfxjaG5TUMFB5vnXUWVm'),
    9,
    'J-JFI',
    'Jungle-Staked JFI'
)
export const RAY_MAIN = new Token(
    101,
    new PublicKey('4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R'),
    6,
    'RAY',
    'Raydium'
)
export const I_RAY_Q4_MAIN = new Token(
    101,
    new PublicKey('iRAYYHCNhEpbDiVt6QKK3Q57DMgw4p8zEKsVz3WfMjW'),
    6,
    'I-RAY-Q4',
    'I-RAY-Q4'
)
export const J_RAY_MAIN = new Token(
    101,
    new PublicKey('jRAYPwLn4ZRGRSKu7GWu6B3Qx3Vj2JU88agUweEceyo'),
    6,
    'J-RAY',
    'Jungle-Staked RAY'
)

export const SOLUSDC_MAIN = new Token(
  101,
  new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
  6,
  'USDC',
  'USD Coin'
)
export const SOLUSDT_MAIN = new Token(
  101,
  new PublicKey('Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB'),
  6,
  'USDT',
  'USDT'
)
export const UST_MAIN = new Token(
  101,
  new PublicKey('9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i'),
  6,
  'UST',
  'UST (Wormhole)'
)
export const STEP = new Token(101, new PublicKey('StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT'), 9, 'STEP', 'Step')
export const SPACE_FALCON = new Token(
  101,
  new PublicKey('HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj'),
  4,
  'FCON',
  'Space Falcon'
)
export const SOLANIUM = new Token(
  101,
  new PublicKey('xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW'),
  6,
  'SLIM',
  'Solanium'
)
export const CYS_MAIN = new Token(
  101,
  new PublicKey('BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg'),
  6,
  'CYS',
  'Cyclos'
)
export const WSOL_MAIN = new Token(
  101,
  new PublicKey('So11111111111111111111111111111111111111112'),
  9,
  'SOL',
  'Wrapped SOL'
)
export const SOLVENT = new Token(101, new PublicKey('svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV'), 6, 'SVT', 'Solvent')
export const FXS = new Token(
  101,
  new PublicKey('6LX8BhMQ4Sy2otmAWj7Y5sKd9YTVVUgfMsBzT6B9W7ct'),
  8,
  'FXS',
  'Frax Share(Portal)'
)
export const FCSTEP_VOLT = new Token(
  101,
  new PublicKey('AQFLXqLLofcbUCoi5HPfuuvX6vMPafubZfBNBMumnKq2'),
  9,
  'fcSTEP',
  'fcSTEP Volt'
)

// Devnet TOKENS

export const SOLUSDC = new Token(
  104,
  new PublicKey('5ihkgQGjKvWvmMtywTgLdwokZ6hqFv5AgxSyYoCNufQW'),
  6,
  'USDC',
  'USDC Coin'
)
export const SOLUSDT = new Token(
  104,
  new PublicKey('4cZv7KgYNgmr3NZSDhT5bhXGGttXKTndqyXeeC1cB6Xm'),
  6,
  'USDT',
  'USDT Coin'
)

// LOCALNET TOKENS

export const SOLUSDC_LOCAL = new Token(
  104,
  new PublicKey('GyH7fsFCvD1Wt8DbUGEk6Hzt68SVqwRKDHSvyBS16ZHm'),
  6,
  'USDC',
  'USD Coin'
)
export const SOLUSDT_LOCAL = new Token(
  104,
  new PublicKey('7HvgZSj1VqsGADkpb8jLXCVqyzniDHP5HzQCymHnrn1t'),
  6,
  'USDT',
  'USDT'
)
export const SOL_LOCAL = new Token(104, new PublicKey('EC1x3JZ1PBW4MqH711rqfERaign6cxLTBNb3mi5LK9vP'), 9, 'wSOL', 'SOL')
export const WSOL_LOCAL = new Token(
  104,
  new PublicKey('So11111111111111111111111111111111111111112'),
  9,
  'SOL',
  'Wrapped SOL'
)
export const SOLCYS_LOCAL = new Token(
  104,
  new PublicKey('cxWg5RTK5AiSbBZh7NRg5btsbSrc8ETLXGf7tk3MUez'),
  6,
  'CYS',
  'Cyclos'
)

export const USDC_ICON =
  'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png'
export const USDT_ICON =
  'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg'
export const SOL_ICON = 'https://cdn.jsdelivr.net/gh/trustwallet/assets@master/blockchains/solana/info/logo.png'
export const CYS_ICON =
  'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg/logo.svg'

// TOKEN BUMPS

// Seed bumps
export const BITMAP_SEED = Buffer.from('b')
export const POOL_SEED = Buffer.from('p')
export const POSITION_SEED = Buffer.from('ps')
export const OBSERVATION_SEED = Buffer.from('o')
export const TICK_SEED = Buffer.from('t')
export const FEE_SEED = Buffer.from('f')
export const METADATA_SEED = Buffer.from('metadata')
