import { Typography } from 'antd';

const { Paragraph, Title, Link } = Typography;

const IRES2020 = () => {
    return (
        <>
            <Paragraph>
                In IRES 2020, we intend to build a knowledge base and recommendation system for stack traces and program
                errors that repetitively appear in the application logs. We would automatically identify that a given
                error occurred in the past (cluster of the same errors), we would describe wherein the application is
                the issue, try to locate steps to fix, linked issues or even match online sources such as a stack
                overflow.
            </Paragraph>

            <Title level={2}>Teams</Title>

            <Paragraph>The whole project is divided into three teams.</Paragraph>
            {/* TODO: use antd */}
            <ul>
                <li>Log Scraper: Log processing and multi-log aggregation.</li>
                <li>Source Crawler: Recreate the execution path.</li>
                <li>Log Errors Automated error log resolution.</li>
            </ul>

            <Title level={2}>Repositories</Title>

            {/* TODO: use antd */}
            <ul>
                <li>
                    <Link href='https://github.com/cloudhubs/log-errors'>https://github.com/cloudhubs/log-errors</Link>
                </li>
                <li>
                    <Link href='https://github.com/cloudhubs/log-errors'>https://github.com/cloudhubs/log-errors</Link>
                </li>
                <li>
                    <Link href='https://github.com/cloudhubs/logscraper'>https://github.com/cloudhubs/logscraper</Link>
                </li>
                <li>
                    <Link href='https://github.com/cloudhubs/log_matcher'>
                        https://github.com/cloudhubs/log_matcher
                    </Link>
                </li>
            </ul>
        </>
    );
};

export default IRES2020;
