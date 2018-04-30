# Enhancing Security with Integrity Hashes

This page describes how to implement Rave’s integrity hash. It also discusses how to add it to any JavaScript Framework you are integrating Rave with. An integrity hash helps you enhance security while working with Rave. It also helps keep your payments invulnerable on the client side. We would explain how integrity hash works:

In making use of an integrity hash, you are meant to sort the payment request parameters you send in your `getpaidSetup` function on your server. Example of such parameters include:

    [ 'PBFPubKey',
      'amount',
      'country',
      'currency',
      'custom_description',
      'custom_logo',
      'custom_title',
      'customer_email',
      'customer_firstname',
      'customer_lastname',
      'customer_phone',
      'payment_method',
      'txref' ]

What happens when you hash the values attached to the parameters in your `getpaidSetup`  function is that Rave’s engine picks them up, sorts them, computes the hash and compares it with the value of `integrity_hash` to make sure they match. This implies that the values you hash must match the values you pass to Rave in your `getpaidSetup` function.  