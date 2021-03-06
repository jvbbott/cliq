
var data = require("./db/users.json");

/****************************************************
 * User-data wrapper functions
 ****************************************************
/*
 * This user system depends on every
 * user's id being their index in the user list
 */


 exports.get_all_other_users = function(curr_id) {
    var other_users = new Array();
    for (var i = 0; i < data.users.length; i++) {
      if (data.users[i].id != curr_id) {
        other_users.push(data.users[i]);
      }
    }
    return other_users;
 };

/* New id for new user */
exports.get_new_id = function() {
    var new_id = data.users.length;
    return new_id;
};

exports.get_user_by_phone = function(phone_number) {
  var curr_user = undefined;
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].phone_number == phone_number) {
      curr_user = data.users[i];
      break;
    }
  }
  return curr_user;
};

/* Return new empty user obj */
exports.get_new_user = function() {
    var new_id = exports.get_new_id();
    return {
      "id": new_id,
      "phone_number" : "",
      "first_name" : "", 
      "last_name" : "",
      "password" : "",
      "auth_code" : "",
      "phone_validated": false
    }
};

/* Given id, return user obj */
exports.get_user_by_id = function(user_id) {
    var curr_user = undefined;
    for (var i = 0; i < data.users.length; i++) {
        if (data.users[i].id == user_id) {
            curr_user = data.users[i];
            break;
        }
    }
    return curr_user;
};

/* Updates user record. If the user
 * does not already exist, adds
 * user to dataset
 */ 
exports.update_user = function(user) {
  console.log(user);
    var index = user.id;
    data.users[index] = user;
};


exports.user_exists= function(phone_number) {
    console.log("CHECKING IF "+phone_number+" EXISTS");
    for (var i = 0; i < data.users.length; i++) {
      if (data.users[i].phone_number == phone_number) {
        return true;
      }
    }
    return false;
};




/****************************************************/
