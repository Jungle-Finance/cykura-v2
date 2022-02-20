export type CyclosCore = {
  version: '0.1.0'
  name: 'cyclos_core'
  instructions: [
    {
      name: 'initFactory'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'factoryStateBump'
          type: 'u8'
        }
      ]
    },
    {
      name: 'setOwner'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'newOwner'
          isMut: false
          isSigner: false
        },
        {
          name: 'factoryState'
          isMut: true
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'enableFeeAmount'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: true
          isSigner: false
        },
        {
          name: 'feeState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'feeStateBump'
          type: 'u8'
        },
        {
          name: 'fee'
          type: 'u32'
        },
        {
          name: 'tickSpacing'
          type: 'u16'
        }
      ]
    },
    {
      name: 'createAndInitPool'
      accounts: [
        {
          name: 'poolCreator'
          isMut: true
          isSigner: true
        },
        {
          name: 'token0'
          isMut: false
          isSigner: false
        },
        {
          name: 'token1'
          isMut: false
          isSigner: false
        },
        {
          name: 'feeState'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'initialObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'poolStateBump'
          type: 'u8'
        },
        {
          name: 'observationStateBump'
          type: 'u8'
        },
        {
          name: 'sqrtPriceX32'
          type: 'u64'
        }
      ]
    },
    {
      name: 'increaseObservationCardinalityNext'
      accounts: [
        {
          name: 'payer'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'observationAccountBumps'
          type: 'bytes'
        }
      ]
    },
    {
      name: 'setFeeProtocol'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: true
          isSigner: false
        }
      ]
      args: [
        {
          name: 'feeProtocol'
          type: 'u8'
        }
      ]
    },
    {
      name: 'collectProtocol'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet0'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet1'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Requested'
          type: 'u64'
        },
        {
          name: 'amount1Requested'
          type: 'u64'
        }
      ]
    },
    {
      name: 'initTickAccount'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'poolState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tickState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'tickAccountBump'
          type: 'u8'
        },
        {
          name: 'tick'
          type: 'i32'
        }
      ]
    },
    {
      name: 'closeTickAccount'
      accounts: [
        {
          name: 'tickState'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipient'
          isMut: true
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'initBitmapAccount'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'poolState'
          isMut: false
          isSigner: false
        },
        {
          name: 'bitmapState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'bump'
          type: 'u8'
        },
        {
          name: 'wordPos'
          type: 'i16'
        }
      ]
    },
    {
      name: 'initPositionAccount'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'recipient'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: false
          isSigner: false
        },
        {
          name: 'positionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'bump'
          type: 'u8'
        }
      ]
    },
    {
      name: 'mintCallback'
      accounts: [
        {
          name: 'minter'
          isMut: false
          isSigner: true
        },
        {
          name: 'tokenAccount0'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenAccount1'
          isMut: false
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: false
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Owed'
          type: 'u64'
        },
        {
          name: 'amount1Owed'
          type: 'u64'
        }
      ]
    },
    {
      name: 'swapCallback'
      accounts: [
        {
          name: 'signer'
          isMut: false
          isSigner: true
        },
        {
          name: 'inputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'inputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Delta'
          type: 'i64'
        },
        {
          name: 'amount1Delta'
          type: 'i64'
        }
      ]
    },
    {
      name: 'mint'
      accounts: [
        {
          name: 'minter'
          isMut: true
          isSigner: true
        },
        {
          name: 'tokenAccount0'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount1'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipient'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'positionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'callbackHandler'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'burn'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: false
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: false
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: false
          isSigner: false
        },
        {
          name: 'positionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: false
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount'
          type: 'u64'
        }
      ]
    },
    {
      name: 'collect'
      accounts: [
        {
          name: 'owner'
          isMut: false
          isSigner: true
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: false
          isSigner: false
        },
        {
          name: 'positionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet0'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet1'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Requested'
          type: 'u64'
        },
        {
          name: 'amount1Requested'
          type: 'u64'
        }
      ]
    },
    {
      name: 'swap'
      accounts: [
        {
          name: 'signer'
          isMut: false
          isSigner: true
        },
        {
          name: 'inputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'inputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'callbackHandler'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amountSpecified'
          type: 'i64'
        },
        {
          name: 'sqrtPriceLimitX32'
          type: 'u64'
        }
      ]
    },
    {
      name: 'mintTokenizedPosition'
      accounts: [
        {
          name: 'minter'
          isMut: true
          isSigner: true
        },
        {
          name: 'recipient'
          isMut: false
          isSigner: false
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMint'
          isMut: true
          isSigner: true
        },
        {
          name: 'nftAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'corePositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenizedPositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount0'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount1'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'associatedTokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'bump'
          type: 'u8'
        },
        {
          name: 'amount0Desired'
          type: 'u64'
        },
        {
          name: 'amount1Desired'
          type: 'u64'
        },
        {
          name: 'amount0Min'
          type: 'u64'
        },
        {
          name: 'amount1Min'
          type: 'u64'
        },
        {
          name: 'deadline'
          type: 'i64'
        }
      ]
    },
    {
      name: 'addMetaplexMetadata'
      accounts: [
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'nftMint'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenizedPositionState'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'rent'
          isMut: false
          isSigner: false
        },
        {
          name: 'metadataProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'systemProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: []
    },
    {
      name: 'increaseLiquidity'
      accounts: [
        {
          name: 'payer'
          isMut: true
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenizedPositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'corePositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount0'
          isMut: true
          isSigner: false
        },
        {
          name: 'tokenAccount1'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Desired'
          type: 'u64'
        },
        {
          name: 'amount1Desired'
          type: 'u64'
        },
        {
          name: 'amount0Min'
          type: 'u64'
        },
        {
          name: 'amount1Min'
          type: 'u64'
        },
        {
          name: 'deadline'
          type: 'i64'
        }
      ]
    },
    {
      name: 'decreaseLiquidity'
      accounts: [
        {
          name: 'ownerOrDelegate'
          isMut: true
          isSigner: true
        },
        {
          name: 'nftAccount'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenizedPositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'corePositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'liquidity'
          type: 'u64'
        },
        {
          name: 'amount0Min'
          type: 'u64'
        },
        {
          name: 'amount1Min'
          type: 'u64'
        },
        {
          name: 'deadline'
          type: 'i64'
        }
      ]
    },
    {
      name: 'collectFromTokenized'
      accounts: [
        {
          name: 'ownerOrDelegate'
          isMut: true
          isSigner: true
        },
        {
          name: 'nftAccount'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenizedPositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'corePositionState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'tickUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapLowerState'
          isMut: true
          isSigner: false
        },
        {
          name: 'bitmapUpperState'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault0'
          isMut: true
          isSigner: false
        },
        {
          name: 'vault1'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet0'
          isMut: true
          isSigner: false
        },
        {
          name: 'recipientWallet1'
          isMut: true
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'amount0Max'
          type: 'u64'
        },
        {
          name: 'amount1Max'
          type: 'u64'
        }
      ]
    },
    {
      name: 'exactInputSingle'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'poolState'
          isMut: true
          isSigner: false
        },
        {
          name: 'inputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'inputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'outputVault'
          isMut: true
          isSigner: false
        },
        {
          name: 'lastObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'nextObservationState'
          isMut: true
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'deadline'
          type: 'i64'
        },
        {
          name: 'amountIn'
          type: 'u64'
        },
        {
          name: 'amountOutMinimum'
          type: 'u64'
        },
        {
          name: 'sqrtPriceLimitX32'
          type: 'u64'
        }
      ]
    },
    {
      name: 'exactInput'
      accounts: [
        {
          name: 'signer'
          isMut: true
          isSigner: true
        },
        {
          name: 'factoryState'
          isMut: false
          isSigner: false
        },
        {
          name: 'inputTokenAccount'
          isMut: true
          isSigner: false
        },
        {
          name: 'coreProgram'
          isMut: false
          isSigner: false
        },
        {
          name: 'tokenProgram'
          isMut: false
          isSigner: false
        }
      ]
      args: [
        {
          name: 'deadline'
          type: 'i64'
        },
        {
          name: 'amountIn'
          type: 'u64'
        },
        {
          name: 'amountOutMinimum'
          type: 'u64'
        },
        {
          name: 'additionalAccountsPerPool'
          type: 'bytes'
        }
      ]
    }
  ]
  accounts: [
    {
      name: 'factoryState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'owner'
            type: 'publicKey'
          },
          {
            name: 'feeProtocol'
            type: 'u8'
          }
        ]
      }
    },
    {
      name: 'feeState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'fee'
            type: 'u32'
          },
          {
            name: 'tickSpacing'
            type: 'u16'
          }
        ]
      }
    },
    {
      name: 'observationState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'index'
            type: 'u16'
          },
          {
            name: 'blockTimestamp'
            type: 'u32'
          },
          {
            name: 'tickCumulative'
            type: 'i64'
          },
          {
            name: 'secondsPerLiquidityCumulativeX32'
            type: 'u64'
          },
          {
            name: 'initialized'
            type: 'bool'
          }
        ]
      }
    },
    {
      name: 'poolState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'token0'
            type: 'publicKey'
          },
          {
            name: 'token1'
            type: 'publicKey'
          },
          {
            name: 'fee'
            type: 'u32'
          },
          {
            name: 'tickSpacing'
            type: 'u16'
          },
          {
            name: 'liquidity'
            type: 'u64'
          },
          {
            name: 'sqrtPriceX32'
            type: 'u64'
          },
          {
            name: 'tick'
            type: 'i32'
          },
          {
            name: 'observationIndex'
            type: 'u16'
          },
          {
            name: 'observationCardinality'
            type: 'u16'
          },
          {
            name: 'observationCardinalityNext'
            type: 'u16'
          },
          {
            name: 'feeGrowthGlobal0X32'
            type: 'u64'
          },
          {
            name: 'feeGrowthGlobal1X32'
            type: 'u64'
          },
          {
            name: 'protocolFeesToken0'
            type: 'u64'
          },
          {
            name: 'protocolFeesToken1'
            type: 'u64'
          },
          {
            name: 'unlocked'
            type: 'bool'
          }
        ]
      }
    },
    {
      name: 'positionState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'liquidity'
            type: 'u64'
          },
          {
            name: 'feeGrowthInside0LastX32'
            type: 'u64'
          },
          {
            name: 'feeGrowthInside1LastX32'
            type: 'u64'
          },
          {
            name: 'tokensOwed0'
            type: 'u64'
          },
          {
            name: 'tokensOwed1'
            type: 'u64'
          }
        ]
      }
    },
    {
      name: 'positionManagerState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          }
        ]
      }
    },
    {
      name: 'swapRouterState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'core'
            type: 'publicKey'
          },
          {
            name: 'amountInCached'
            type: 'u64'
          }
        ]
      }
    },
    {
      name: 'tickState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'tick'
            type: 'i32'
          },
          {
            name: 'liquidityNet'
            type: 'i64'
          },
          {
            name: 'liquidityGross'
            type: 'u64'
          },
          {
            name: 'feeGrowthOutside0X32'
            type: 'u64'
          },
          {
            name: 'feeGrowthOutside1X32'
            type: 'u64'
          },
          {
            name: 'tickCumulativeOutside'
            type: 'i64'
          },
          {
            name: 'secondsPerLiquidityOutsideX32'
            type: 'u64'
          },
          {
            name: 'secondsOutside'
            type: 'u32'
          }
        ]
      }
    },
    {
      name: 'tickBitmapState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'wordPos'
            type: 'i16'
          },
          {
            name: 'word'
            type: {
              array: ['u64', 4]
            }
          }
        ]
      }
    },
    {
      name: 'tokenizedPositionState'
      type: {
        kind: 'struct'
        fields: [
          {
            name: 'bump'
            type: 'u8'
          },
          {
            name: 'mint'
            type: 'publicKey'
          },
          {
            name: 'poolId'
            type: 'publicKey'
          },
          {
            name: 'tickLower'
            type: 'i32'
          },
          {
            name: 'tickUpper'
            type: 'i32'
          },
          {
            name: 'liquidity'
            type: 'u64'
          },
          {
            name: 'feeGrowthInside0LastX32'
            type: 'u64'
          },
          {
            name: 'feeGrowthInside1LastX32'
            type: 'u64'
          },
          {
            name: 'tokensOwed0'
            type: 'u64'
          },
          {
            name: 'tokensOwed1'
            type: 'u64'
          }
        ]
      }
    }
  ]
  events: [
    {
      name: 'OwnerChanged'
      fields: [
        {
          name: 'oldOwner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'newOwner'
          type: 'publicKey'
          index: false
        }
      ]
    },
    {
      name: 'SetFeeProtocolEvent'
      fields: [
        {
          name: 'feeProtocolOld'
          type: 'u8'
          index: false
        },
        {
          name: 'feeProtocol'
          type: 'u8'
          index: false
        }
      ]
    },
    {
      name: 'FeeAmountEnabled'
      fields: [
        {
          name: 'fee'
          type: 'u32'
          index: false
        },
        {
          name: 'tickSpacing'
          type: 'u16'
          index: false
        }
      ]
    },
    {
      name: 'IncreaseObservationCardinalityNext'
      fields: [
        {
          name: 'observationCardinalityNextOld'
          type: 'u16'
          index: false
        },
        {
          name: 'observationCardinalityNextNew'
          type: 'u16'
          index: false
        }
      ]
    },
    {
      name: 'PoolCreatedAndInitialized'
      fields: [
        {
          name: 'token0'
          type: 'publicKey'
          index: false
        },
        {
          name: 'token1'
          type: 'publicKey'
          index: false
        },
        {
          name: 'fee'
          type: 'u32'
          index: false
        },
        {
          name: 'tickSpacing'
          type: 'u16'
          index: false
        },
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'sqrtPriceX32'
          type: 'u64'
          index: false
        },
        {
          name: 'tick'
          type: 'i32'
          index: false
        }
      ]
    },
    {
      name: 'CollectProtocolEvent'
      fields: [
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'sender'
          type: 'publicKey'
          index: false
        },
        {
          name: 'recipientWallet0'
          type: 'publicKey'
          index: false
        },
        {
          name: 'recipientWallet1'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'SwapEvent'
      fields: [
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'sender'
          type: 'publicKey'
          index: false
        },
        {
          name: 'tokenAccount0'
          type: 'publicKey'
          index: false
        },
        {
          name: 'tokenAccount1'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amount0'
          type: 'i64'
          index: false
        },
        {
          name: 'amount1'
          type: 'i64'
          index: false
        },
        {
          name: 'sqrtPriceX32'
          type: 'u64'
          index: false
        },
        {
          name: 'liquidity'
          type: 'u64'
          index: false
        },
        {
          name: 'tick'
          type: 'i32'
          index: false
        }
      ]
    },
    {
      name: 'MintEvent'
      fields: [
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'sender'
          type: 'publicKey'
          index: false
        },
        {
          name: 'owner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'tickLower'
          type: 'i32'
          index: false
        },
        {
          name: 'tickUpper'
          type: 'i32'
          index: false
        },
        {
          name: 'amount'
          type: 'u64'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'BurnEvent'
      fields: [
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'owner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'tickLower'
          type: 'i32'
          index: false
        },
        {
          name: 'tickUpper'
          type: 'i32'
          index: false
        },
        {
          name: 'amount'
          type: 'u64'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'CollectEvent'
      fields: [
        {
          name: 'poolState'
          type: 'publicKey'
          index: false
        },
        {
          name: 'owner'
          type: 'publicKey'
          index: false
        },
        {
          name: 'tickLower'
          type: 'i32'
          index: false
        },
        {
          name: 'tickUpper'
          type: 'i32'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'IncreaseLiquidityEvent'
      fields: [
        {
          name: 'tokenId'
          type: 'publicKey'
          index: false
        },
        {
          name: 'liquidity'
          type: 'u64'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'DecreaseLiquidityEvent'
      fields: [
        {
          name: 'tokenId'
          type: 'publicKey'
          index: false
        },
        {
          name: 'liquidity'
          type: 'u64'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    },
    {
      name: 'CollectTokenizedEvent'
      fields: [
        {
          name: 'tokenId'
          type: 'publicKey'
          index: false
        },
        {
          name: 'recipientWallet0'
          type: 'publicKey'
          index: false
        },
        {
          name: 'recipientWallet1'
          type: 'publicKey'
          index: false
        },
        {
          name: 'amount0'
          type: 'u64'
          index: false
        },
        {
          name: 'amount1'
          type: 'u64'
          index: false
        }
      ]
    }
  ]
  errors: [
    {
      code: 6000
      name: 'LOK'
      msg: 'LOK'
    },
    {
      code: 6001
      name: 'ZeroMintAmount'
      msg: 'Minting amount should be greater than 0'
    },
    {
      code: 6002
      name: 'TLU'
      msg: 'TLU'
    },
    {
      code: 6003
      name: 'TMS'
      msg: 'TMS'
    },
    {
      code: 6004
      name: 'TLM'
      msg: 'TLM'
    },
    {
      code: 6005
      name: 'TUM'
      msg: 'TUM'
    },
    {
      code: 6006
      name: 'M0'
      msg: 'M0'
    },
    {
      code: 6007
      name: 'M1'
      msg: 'M1'
    },
    {
      code: 6008
      name: 'OS'
      msg: 'OS'
    },
    {
      code: 6009
      name: 'AS'
      msg: 'AS'
    },
    {
      code: 6010
      name: 'SPL'
      msg: 'SPL'
    },
    {
      code: 6011
      name: 'IIA'
      msg: 'IIA'
    },
    {
      code: 6012
      name: 'NP'
      msg: 'NP'
    },
    {
      code: 6013
      name: 'LO'
      msg: 'LO'
    },
    {
      code: 6014
      name: 'R'
      msg: 'R'
    },
    {
      code: 6015
      name: 'T'
      msg: 'T'
    },
    {
      code: 6016
      name: 'LS'
      msg: 'LS'
    },
    {
      code: 6017
      name: 'LA'
      msg: 'LA'
    },
    {
      code: 6018
      name: 'TransactionTooOld'
      msg: 'Transaction too old'
    },
    {
      code: 6019
      name: 'PriceSlippageCheck'
      msg: 'Price slippage check'
    },
    {
      code: 6020
      name: 'NotApproved'
      msg: 'Not approved'
    },
    {
      code: 6021
      name: 'TooLittleReceived'
      msg: 'Too little received'
    }
  ]
}

export const IDL: CyclosCore = {
  version: '0.1.0',
  name: 'cyclos_core',
  instructions: [
    {
      name: 'initFactory',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'factoryStateBump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'setOwner',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'newOwner',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'factoryState',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'enableFeeAmount',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'feeState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'feeStateBump',
          type: 'u8',
        },
        {
          name: 'fee',
          type: 'u32',
        },
        {
          name: 'tickSpacing',
          type: 'u16',
        },
      ],
    },
    {
      name: 'createAndInitPool',
      accounts: [
        {
          name: 'poolCreator',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'token0',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'token1',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'feeState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'initialObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'poolStateBump',
          type: 'u8',
        },
        {
          name: 'observationStateBump',
          type: 'u8',
        },
        {
          name: 'sqrtPriceX32',
          type: 'u64',
        },
      ],
    },
    {
      name: 'increaseObservationCardinalityNext',
      accounts: [
        {
          name: 'payer',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'observationAccountBumps',
          type: 'bytes',
        },
      ],
    },
    {
      name: 'setFeeProtocol',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'feeProtocol',
          type: 'u8',
        },
      ],
    },
    {
      name: 'collectProtocol',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Requested',
          type: 'u64',
        },
        {
          name: 'amount1Requested',
          type: 'u64',
        },
      ],
    },
    {
      name: 'initTickAccount',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'poolState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tickState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'tickAccountBump',
          type: 'u8',
        },
        {
          name: 'tick',
          type: 'i32',
        },
      ],
    },
    {
      name: 'closeTickAccount',
      accounts: [
        {
          name: 'tickState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipient',
          isMut: true,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'initBitmapAccount',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'poolState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bitmapState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'wordPos',
          type: 'i16',
        },
      ],
    },
    {
      name: 'initPositionAccount',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'recipient',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'positionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
      ],
    },
    {
      name: 'mintCallback',
      accounts: [
        {
          name: 'minter',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'tokenAccount0',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenAccount1',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Owed',
          type: 'u64',
        },
        {
          name: 'amount1Owed',
          type: 'u64',
        },
      ],
    },
    {
      name: 'swapCallback',
      accounts: [
        {
          name: 'signer',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'inputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'inputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Delta',
          type: 'i64',
        },
        {
          name: 'amount1Delta',
          type: 'i64',
        },
      ],
    },
    {
      name: 'mint',
      accounts: [
        {
          name: 'minter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'tokenAccount0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipient',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'positionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'callbackHandler',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'burn',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'positionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount',
          type: 'u64',
        },
      ],
    },
    {
      name: 'collect',
      accounts: [
        {
          name: 'owner',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'positionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Requested',
          type: 'u64',
        },
        {
          name: 'amount1Requested',
          type: 'u64',
        },
      ],
    },
    {
      name: 'swap',
      accounts: [
        {
          name: 'signer',
          isMut: false,
          isSigner: true,
        },
        {
          name: 'inputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'inputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'callbackHandler',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amountSpecified',
          type: 'i64',
        },
        {
          name: 'sqrtPriceLimitX32',
          type: 'u64',
        },
      ],
    },
    {
      name: 'mintTokenizedPosition',
      accounts: [
        {
          name: 'minter',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'recipient',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'corePositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenizedPositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'associatedTokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'bump',
          type: 'u8',
        },
        {
          name: 'amount0Desired',
          type: 'u64',
        },
        {
          name: 'amount1Desired',
          type: 'u64',
        },
        {
          name: 'amount0Min',
          type: 'u64',
        },
        {
          name: 'amount1Min',
          type: 'u64',
        },
        {
          name: 'deadline',
          type: 'i64',
        },
      ],
    },
    {
      name: 'addMetaplexMetadata',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'nftMint',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenizedPositionState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'rent',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'metadataProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'systemProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [],
    },
    {
      name: 'increaseLiquidity',
      accounts: [
        {
          name: 'payer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenizedPositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'corePositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tokenAccount1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Desired',
          type: 'u64',
        },
        {
          name: 'amount1Desired',
          type: 'u64',
        },
        {
          name: 'amount0Min',
          type: 'u64',
        },
        {
          name: 'amount1Min',
          type: 'u64',
        },
        {
          name: 'deadline',
          type: 'i64',
        },
      ],
    },
    {
      name: 'decreaseLiquidity',
      accounts: [
        {
          name: 'ownerOrDelegate',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenizedPositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'corePositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'liquidity',
          type: 'u64',
        },
        {
          name: 'amount0Min',
          type: 'u64',
        },
        {
          name: 'amount1Min',
          type: 'u64',
        },
        {
          name: 'deadline',
          type: 'i64',
        },
      ],
    },
    {
      name: 'collectFromTokenized',
      accounts: [
        {
          name: 'ownerOrDelegate',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'nftAccount',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenizedPositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'corePositionState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'tickUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapLowerState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'bitmapUpperState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'vault1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet0',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'recipientWallet1',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'amount0Max',
          type: 'u64',
        },
        {
          name: 'amount1Max',
          type: 'u64',
        },
      ],
    },
    {
      name: 'exactInputSingle',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'poolState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'inputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'inputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'outputVault',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'lastObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'nextObservationState',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'deadline',
          type: 'i64',
        },
        {
          name: 'amountIn',
          type: 'u64',
        },
        {
          name: 'amountOutMinimum',
          type: 'u64',
        },
        {
          name: 'sqrtPriceLimitX32',
          type: 'u64',
        },
      ],
    },
    {
      name: 'exactInput',
      accounts: [
        {
          name: 'signer',
          isMut: true,
          isSigner: true,
        },
        {
          name: 'factoryState',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'inputTokenAccount',
          isMut: true,
          isSigner: false,
        },
        {
          name: 'coreProgram',
          isMut: false,
          isSigner: false,
        },
        {
          name: 'tokenProgram',
          isMut: false,
          isSigner: false,
        },
      ],
      args: [
        {
          name: 'deadline',
          type: 'i64',
        },
        {
          name: 'amountIn',
          type: 'u64',
        },
        {
          name: 'amountOutMinimum',
          type: 'u64',
        },
        {
          name: 'additionalAccountsPerPool',
          type: 'bytes',
        },
      ],
    },
  ],
  accounts: [
    {
      name: 'factoryState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'owner',
            type: 'publicKey',
          },
          {
            name: 'feeProtocol',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'feeState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'fee',
            type: 'u32',
          },
          {
            name: 'tickSpacing',
            type: 'u16',
          },
        ],
      },
    },
    {
      name: 'observationState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'index',
            type: 'u16',
          },
          {
            name: 'blockTimestamp',
            type: 'u32',
          },
          {
            name: 'tickCumulative',
            type: 'i64',
          },
          {
            name: 'secondsPerLiquidityCumulativeX32',
            type: 'u64',
          },
          {
            name: 'initialized',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'poolState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'token0',
            type: 'publicKey',
          },
          {
            name: 'token1',
            type: 'publicKey',
          },
          {
            name: 'fee',
            type: 'u32',
          },
          {
            name: 'tickSpacing',
            type: 'u16',
          },
          {
            name: 'liquidity',
            type: 'u64',
          },
          {
            name: 'sqrtPriceX32',
            type: 'u64',
          },
          {
            name: 'tick',
            type: 'i32',
          },
          {
            name: 'observationIndex',
            type: 'u16',
          },
          {
            name: 'observationCardinality',
            type: 'u16',
          },
          {
            name: 'observationCardinalityNext',
            type: 'u16',
          },
          {
            name: 'feeGrowthGlobal0X32',
            type: 'u64',
          },
          {
            name: 'feeGrowthGlobal1X32',
            type: 'u64',
          },
          {
            name: 'protocolFeesToken0',
            type: 'u64',
          },
          {
            name: 'protocolFeesToken1',
            type: 'u64',
          },
          {
            name: 'unlocked',
            type: 'bool',
          },
        ],
      },
    },
    {
      name: 'positionState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'liquidity',
            type: 'u64',
          },
          {
            name: 'feeGrowthInside0LastX32',
            type: 'u64',
          },
          {
            name: 'feeGrowthInside1LastX32',
            type: 'u64',
          },
          {
            name: 'tokensOwed0',
            type: 'u64',
          },
          {
            name: 'tokensOwed1',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'positionManagerState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
        ],
      },
    },
    {
      name: 'swapRouterState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'core',
            type: 'publicKey',
          },
          {
            name: 'amountInCached',
            type: 'u64',
          },
        ],
      },
    },
    {
      name: 'tickState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'tick',
            type: 'i32',
          },
          {
            name: 'liquidityNet',
            type: 'i64',
          },
          {
            name: 'liquidityGross',
            type: 'u64',
          },
          {
            name: 'feeGrowthOutside0X32',
            type: 'u64',
          },
          {
            name: 'feeGrowthOutside1X32',
            type: 'u64',
          },
          {
            name: 'tickCumulativeOutside',
            type: 'i64',
          },
          {
            name: 'secondsPerLiquidityOutsideX32',
            type: 'u64',
          },
          {
            name: 'secondsOutside',
            type: 'u32',
          },
        ],
      },
    },
    {
      name: 'tickBitmapState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'wordPos',
            type: 'i16',
          },
          {
            name: 'word',
            type: {
              array: ['u64', 4],
            },
          },
        ],
      },
    },
    {
      name: 'tokenizedPositionState',
      type: {
        kind: 'struct',
        fields: [
          {
            name: 'bump',
            type: 'u8',
          },
          {
            name: 'mint',
            type: 'publicKey',
          },
          {
            name: 'poolId',
            type: 'publicKey',
          },
          {
            name: 'tickLower',
            type: 'i32',
          },
          {
            name: 'tickUpper',
            type: 'i32',
          },
          {
            name: 'liquidity',
            type: 'u64',
          },
          {
            name: 'feeGrowthInside0LastX32',
            type: 'u64',
          },
          {
            name: 'feeGrowthInside1LastX32',
            type: 'u64',
          },
          {
            name: 'tokensOwed0',
            type: 'u64',
          },
          {
            name: 'tokensOwed1',
            type: 'u64',
          },
        ],
      },
    },
  ],
  events: [
    {
      name: 'OwnerChanged',
      fields: [
        {
          name: 'oldOwner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'newOwner',
          type: 'publicKey',
          index: false,
        },
      ],
    },
    {
      name: 'SetFeeProtocolEvent',
      fields: [
        {
          name: 'feeProtocolOld',
          type: 'u8',
          index: false,
        },
        {
          name: 'feeProtocol',
          type: 'u8',
          index: false,
        },
      ],
    },
    {
      name: 'FeeAmountEnabled',
      fields: [
        {
          name: 'fee',
          type: 'u32',
          index: false,
        },
        {
          name: 'tickSpacing',
          type: 'u16',
          index: false,
        },
      ],
    },
    {
      name: 'IncreaseObservationCardinalityNext',
      fields: [
        {
          name: 'observationCardinalityNextOld',
          type: 'u16',
          index: false,
        },
        {
          name: 'observationCardinalityNextNew',
          type: 'u16',
          index: false,
        },
      ],
    },
    {
      name: 'PoolCreatedAndInitialized',
      fields: [
        {
          name: 'token0',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'token1',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'fee',
          type: 'u32',
          index: false,
        },
        {
          name: 'tickSpacing',
          type: 'u16',
          index: false,
        },
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'sqrtPriceX32',
          type: 'u64',
          index: false,
        },
        {
          name: 'tick',
          type: 'i32',
          index: false,
        },
      ],
    },
    {
      name: 'CollectProtocolEvent',
      fields: [
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'sender',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'recipientWallet0',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'recipientWallet1',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'SwapEvent',
      fields: [
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'sender',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'tokenAccount0',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'tokenAccount1',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount0',
          type: 'i64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'i64',
          index: false,
        },
        {
          name: 'sqrtPriceX32',
          type: 'u64',
          index: false,
        },
        {
          name: 'liquidity',
          type: 'u64',
          index: false,
        },
        {
          name: 'tick',
          type: 'i32',
          index: false,
        },
      ],
    },
    {
      name: 'MintEvent',
      fields: [
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'sender',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'owner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'tickLower',
          type: 'i32',
          index: false,
        },
        {
          name: 'tickUpper',
          type: 'i32',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'BurnEvent',
      fields: [
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'owner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'tickLower',
          type: 'i32',
          index: false,
        },
        {
          name: 'tickUpper',
          type: 'i32',
          index: false,
        },
        {
          name: 'amount',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'CollectEvent',
      fields: [
        {
          name: 'poolState',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'owner',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'tickLower',
          type: 'i32',
          index: false,
        },
        {
          name: 'tickUpper',
          type: 'i32',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'IncreaseLiquidityEvent',
      fields: [
        {
          name: 'tokenId',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'liquidity',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'DecreaseLiquidityEvent',
      fields: [
        {
          name: 'tokenId',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'liquidity',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
    {
      name: 'CollectTokenizedEvent',
      fields: [
        {
          name: 'tokenId',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'recipientWallet0',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'recipientWallet1',
          type: 'publicKey',
          index: false,
        },
        {
          name: 'amount0',
          type: 'u64',
          index: false,
        },
        {
          name: 'amount1',
          type: 'u64',
          index: false,
        },
      ],
    },
  ],
  errors: [
    {
      code: 6000,
      name: 'LOK',
      msg: 'LOK',
    },
    {
      code: 6001,
      name: 'ZeroMintAmount',
      msg: 'Minting amount should be greater than 0',
    },
    {
      code: 6002,
      name: 'TLU',
      msg: 'TLU',
    },
    {
      code: 6003,
      name: 'TMS',
      msg: 'TMS',
    },
    {
      code: 6004,
      name: 'TLM',
      msg: 'TLM',
    },
    {
      code: 6005,
      name: 'TUM',
      msg: 'TUM',
    },
    {
      code: 6006,
      name: 'M0',
      msg: 'M0',
    },
    {
      code: 6007,
      name: 'M1',
      msg: 'M1',
    },
    {
      code: 6008,
      name: 'OS',
      msg: 'OS',
    },
    {
      code: 6009,
      name: 'AS',
      msg: 'AS',
    },
    {
      code: 6010,
      name: 'SPL',
      msg: 'SPL',
    },
    {
      code: 6011,
      name: 'IIA',
      msg: 'IIA',
    },
    {
      code: 6012,
      name: 'NP',
      msg: 'NP',
    },
    {
      code: 6013,
      name: 'LO',
      msg: 'LO',
    },
    {
      code: 6014,
      name: 'R',
      msg: 'R',
    },
    {
      code: 6015,
      name: 'T',
      msg: 'T',
    },
    {
      code: 6016,
      name: 'LS',
      msg: 'LS',
    },
    {
      code: 6017,
      name: 'LA',
      msg: 'LA',
    },
    {
      code: 6018,
      name: 'TransactionTooOld',
      msg: 'Transaction too old',
    },
    {
      code: 6019,
      name: 'PriceSlippageCheck',
      msg: 'Price slippage check',
    },
    {
      code: 6020,
      name: 'NotApproved',
      msg: 'Not approved',
    },
    {
      code: 6021,
      name: 'TooLittleReceived',
      msg: 'Too little received',
    },
  ],
}
