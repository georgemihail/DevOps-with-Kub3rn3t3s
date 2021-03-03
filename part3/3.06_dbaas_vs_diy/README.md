## DBaaS vs DIY DB

### DBaaS

* required work:
    * simpler to configure, directly from GCP.

* cost to initialize and mantain
    * a small inexpensive instance cost starts from less than 10$ per month
    *  A default one (db-n1-standard-1) should cost around 40-50$/month

* back methods / ease of usage
    * Simply customize backups from the Google Cloud Platform.

### DIY

* required work:
    * need to configure yaml files with multiple resources like secrets, configmaps, StatefulSet, etc.

* cost to initialize and mantain
    * can get more expensive, if you consider the time and effort
    * Also, you need to pay for storage used in PersistentVolumeClaim

* back methods / ease of usage
    * you need to set separate instances like CronJobs to make backup, which require much effort and work.
    * Also, you'll need to pay for the storage used in a PVC.