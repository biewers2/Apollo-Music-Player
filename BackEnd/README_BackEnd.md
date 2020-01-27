This is a readme specific to development and providing info on what is available to members of the team.

Waitress is a WSGI (web server gateway interface) that can host our python code and utilize the Flask framework.
To install waitress (and any other dependencies):
    1. Make sure you have python and pip installed correctly.
    2. Run the "check_apollo_dev_dependencies.bat" file.
    3. Run the "waitress_serve.bat" file.
    4. Use the web interface. Profit. Thats it.

Notes: Waitress can utilize multiple threads when serving. Waitress is a windows-compatible WSGI. Waitress timeout is set to 90 minutes if idle on port 5000, this can be modified in Waitress' launch options.

    If you are getting [WinError 10053] An established connection was aborted by the software...
    This is most likely windows firewall blocking our port after a few minutes of inactivity.
        1. Navigate to Control Panel, System and Security and Windows Firewall.
        2. Select Advanced settings and highlight Inbound Rules in the left pane.
        3. Right click Inbound Rules and select New Rule.
        4. Add the port you need to open (5000) and click Next.
        5. Add the protocol (TCP) and click Next.
        6. Select Allow the connection in the next window and hit Next.
        7. Select the network type as private and click Next.
        8. Name the rule something meaningful and click Finish.
        9. Repeat steps 3-8 but in UDP protocol.
        10. Repeat steps 3-9 but in Outbound Rules.

        *Upon further inspection it appears something is kicking us out of port 5000. Maybe use 8090 to minimize any conflict.