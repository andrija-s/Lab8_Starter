# Lab 8 - Starter

Andrija Sunjic

[Test Screenshot](THE_TESTS.png)

1) I would do "1. Within a Github action that runs whenever code is pushed"
   Having a set standard for all code contribution is the best way possible.
   You don't want to wait until development is complete because that is insane,
   your system would accrue too many hidden gremlins that would be difficult
   to track down and uncouple from the overall system. And running locally only
   addresses the code contribution of a single developer at a time, distributing
   those test standards would be a major annoyance and making sure everyone
   adheres to them would also be problematic. #1 doesn't have these issues.

2) No. End-to-end would only tell if the whole system is working, individual functions
   should be tested with individual tests.

3) No. Such a feature would probably be coupled with too many other parts of the code.
   It would be better to test the whole system.

4) Yes. It is a simple feature only involving one system.