id	name	country	age
0	Bořivoj Souček	Czech Republic	24
1	Papp Patrícia	Hungary	33
2	Kocsis Ivett	Hungary	37
3	Slavomír Vykukal	Czech Republic	20
4	Bruno Malík	Czech Republic	31
5	Veronika Lukešová	Czech Republic	18
6	Székely Miklós	Hungary	29
7	Hegedüs Benjámin	Hungary	37
8	Nela Machová	Czech Republic	20
9	Balog Rajmund	Hungary	39
10	Major Borbála	Hungary	35
11	Evelína Horváthová	Czech Republic	23
12	Vászoly Vivien	Hungary	40
13	Lada Stýskalová	Czech Republic	27
14	Dagmar Benešová	Czech Republic	33


SQL QUERY:
SELECT name, age FROM applicants WHERE country = 'Czech Republic' ORDER BY age ASC LIMIT 5;
