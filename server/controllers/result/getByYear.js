const {Result} = require('../../models');

module.exports = async (req, res) => {
  const year = req.query.year;

  if (!year) {
    res.status(400).json({message: '결과 전송 실패'});
  }
  if (year <= 0) {
    res
      .status(200)
      .sjon({message: '아무래도 기원전 부터 모았어야할거 같아요...'});
  }
  const result = await Result.findOne({
    where: {year},
  });
  if (result) {
    res
      .status(200)
      .json({text: `${year}년 부터니까 \n ${result.dataValues.text}`});
  } else {
    res.status(200).json({text: `${year}년 부터 모으셔야 했어요!`});
  }
};
