const logRequest = (req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);
  console.log("Body:", req.body);
  console.log("Query:", req.query);
  console.log("Params:", req.params);

  // Capture response body
  const oldSend = res.send;
  let responseBody;
  res.send = function (body) {
    responseBody = body;
    return oldSend.apply(res, arguments);
  };

  res.on('finish', () => {
    console.log("Response Status:", res.statusCode);
    console.log("Response Body:", responseBody);
    console.log("---");
  });

  next();
};

module.exports = { logRequest };
