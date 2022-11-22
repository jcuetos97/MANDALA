const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    street: {
      type: String,
    },  
    zip: {
      type: Number,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    boughtItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    saleItems: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    ],
    soldItems: [
      {
          type: Schema.Types.ObjectId,
          ref: 'Item'
      }
    ],    
  },
  {
    toJSON: {
      virtuals: true,
    }
  }
);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// when we query a user, we'll also get another field called `soldItems` with the number of items already sold
userSchema.virtual('soldCount').get(function () {
  return this.soldItems.length;
});

const User = model('User', userSchema);

module.exports = User;