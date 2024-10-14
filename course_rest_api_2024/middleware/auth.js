const admin = require('firebase-admin');

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const idToken = authHeader.split('Bearer ')[1];

    try {
      const decodedToken = await admin.auth().verifyIdToken(idToken);
      req.user = decodedToken;
			req.idToken = idToken;
      next(); //繼續處理請求
    } catch (error) {
      //console.error('Error verifying token:', error);
      return res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    return res.status(401).json({ error: 'Unauthorized, no token provided' });
  }
};

module.exports = auth;