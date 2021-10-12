const { body, validationResult } = require('express-validator');

const loginValidation=(req,res,next)=>{

body('email','email is required').isEmail(),
body('password', 'pawword must contain 6 characters').isLength({ min: 6,max:20 })
next()
}

const validation=(req,res,next)=>{

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next()
}

module.exports={loginValidation,validation}
