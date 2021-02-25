
## Todo app: different inputs use cases :
***
* Input an usual text: 'make homeworks':

    ![input-normal](output-2.10-normal-post.png)
    * Received in  Grafana - Loki
the log: ` - GET / HTTP/1.1 200 123 - 2141.087 ms` : 

    ![input-normal](output-2.10-normal-loki.png)


***


- Input a text that exceed 140 characters:

    ![input-normal](output-2.10-abnormal-post.png)

    * Received in  Grafana - Loki the message: "`The todo text exceed the length of 140 characters.`" :

    ![input-normal](output-2.10-abnormal-loki.png)
***