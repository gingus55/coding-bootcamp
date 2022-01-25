const Exercises = require("./Exercises");
const Routines = require("./Routines");
const UserRoutine = require("./UserRoutine");
const Users = require("./Users");

Users.hasMany(Routines, {
  through: {
    model: UserRoutine,
    foreignKey: "user_id",
  },
});

Routines.belongsTo(Users, {
  through: {
    model: UserRoutine,
    foreignKey: "user_id",
  },
});

Routines.hasMany(Exercises, {
    foreignKey: "exercise_id",
    unique: true
})

Exercises.belongsToMany(Routines, {
    foreignKey: 
})

