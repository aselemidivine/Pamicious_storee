// const router = require("express").Router();

// router.get("/usertest", (req, res) => {
//   res.send("user test is successful");
// });

// lh:5000/api/user/usertest
// router.post("/userposttest", (req, res) => {
//   const username = req.body.username;
//   console.log(username);
//   res.send("your username is " + username);
// });

// module.exports = router;
// Run `npm audit` for details.
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git branch Divine
//   Divine
//   remotes/origin/HEAD -> origin/main
//   remotes/origin/main
//   remotes/origin/settings
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git checkout Divine
// Switched to branch 'Divine'
// * Divine
//   main
//   remotes/origin/main
//   remotes/origin/settings
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> git branch
// * Divine
//   main
// PS C:\Users\ASELEMI DIVINE\Desktop\Projectos de InstincttHub\leadboard_ft> npm start

const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");
  
  const router = require("express").Router();
  
  // UPDATE
  router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SECRET
      ).toString();
    }
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // DELETE
  router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET USER
  router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const { password, ...others } = user._doc;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET ALL USERS
  router.get("/", verifyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
      const users = query
        ? await User.find().sort({ _id: -1 }).limit(5)
        : await User.find();
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // GET USERS STATS
  router.get("/stats", verifyTokenAndAdmin, async (req, res) => {
    // Return total number of users per month
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
  
    try {
      const data = await User.aggregate([
        { $match: { createdAt: { $gte: lastYear } } },
        {
          $project: {
            month: { $month: "$createdAt" },
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: 1 },
          },
        },
      ]);
      res.status(200).json(data);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
  