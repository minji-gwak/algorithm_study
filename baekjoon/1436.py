n = int(input())
seriesCnt, movieNum = 1, 666 # 시리즈 카운트, 영화 제목에 들어갈 수

while seriesCnt < n: # n번째 영화가 되면 탐색 종료
    movieNum += 1 # 영화 제목에 들어갈 수를 1씩 늘려가면서 '666'이 있는지 확인한다. - 완전탐색
    if '666' in str(movieNum): seriesCnt += 1

print(movieNum)