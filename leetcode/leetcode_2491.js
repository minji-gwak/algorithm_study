const dividePlayers = (skill) => {
  skill.sort((a, b) => a - b);
  const n = skill.length;
  let equalSkill = skill[0] + skill[n - 1];
  let result = 0;

  for (let i = 0; i < n / 2; i++) {
    const totalSkill = skill[i] + skill[n - i - 1];

    if (totalSkill !== equalSkill) {
      return -1;
    }

    result += skill[i] * skill[n - i - 1];
  }

  return result;
};
