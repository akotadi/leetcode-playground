export const schema = `
    scalar Timestamp

    enum DifficultyOption {
    All
    Easy
    Medium
    Hard
    }

    type QuestionCountByDifficultyNode {
    difficulty: DifficultyOption!
    count: Int!
    }

    type SubmissionCountNode {
    difficulty: String!
    count: Int!
    submissions: Int!
    }

    type UserSubmitStatsNode {
    totalSubmissionNum: [SubmissionCountNode!]!
    acSubmissionNum: [SubmissionCountNode!]!
    }

    type UserContributionNode {
    points: Int!
    }

    type UserBadgeNode {
    name: String!
    expired: Boolean!
    hoverText: String!
    displayName: String!
    icon: String!
    }

    type TagProblemsCountNode {
    tagName: String!
    tagSlug: String!
    problemsSolved: Int!
    }

    type TagProblemCountsCategoryNode {
    advanced: [TagProblemsCountNode!]!
    intermediate: [TagProblemsCountNode!]!
    fundamental: [TagProblemsCountNode!]!
    }

    type LanguageProblemCountNode {
    languageName: String!
    problemsSolved: Int
    }

    type UserProfileNode {
    ranking: Int!
    userAvatar: String!
    realName: String!
    aboutMe: String!
    school: String
    websites: [String!]!
    countryName: String
    company: String
    jobTitle: String
    skillTags: [String!]!
    postViewCount: Int!
    postViewCountDiff: Int!
    reputation: Int!
    reputationDiff: Int!
    solutionCount: Int!
    solutionCountDiff: Int!
    categoryDiscussCount: Int!
    categoryDiscussCountDiff: Int!
    }

    type UserNode {
    username: String!
    profile: UserProfileNode!
    contributions: UserContributionNode!
    githubUrl: String
    twitterUrl: String
    linkedinUrl: String
    # Encode JSON object where each entry represent:
    # {
    #   timestamp: # submissions
    # }
    submissionCalendar: String!
    submitStatsGlobal: UserSubmitStatsNode
    submitStats: UserSubmitStatsNode
    activeBadge: UserBadgeNode
    contestBadge: UserBadgeNode
    tagProblemCounts: TagProblemCountsCategoryNode!
    languageProblemCount: [LanguageProblemCountNode!]!
    isDiscussAdmin: Boolean!
    isDiscussStaff: Boolean!
    isActive: Boolean!
    # nameColor - nullable
    }

    type LevelBeatPercentageMixin {
    difficulty: String!
    percentage: Float!
    }

    type QuestionCountNode {
    count: Int!
    difficulty: String!
    }

    type UserQuestionProgressNodeV2 {
    numAcceptedQuestions: [QuestionCountNode!]!
    numFailedQuestions: [QuestionCountNode!]!
    numUntouchedQuestions: [QuestionCountNode!]!
    userSessionBeatsPercentage: [LevelBeatPercentageMixin!]!
    }

    type PostNode {
    id: ID!
    voteStatus: Int!
    voteCount: Int!
    content: String!
    creationDate: Timestamp!
    updationDate: Timestamp!
    status: String
    isHidden: Boolean
    author: UserNode
    authorIsModerator: Boolean!
    isOwnPost: Boolean!
    }

    type SolutionTagNode {
    name: String!
    slug: String!
    count: Int!
    }

    type TopicNode {
        id: ID!
        viewCount: Int!
        commentCount: Int!
        topLevelCommentCount: Int!
        subscribed: Boolean!
        title: String!
        pinned: Boolean!
        solutionTags: [SolutionTagNode!]!
        hideFromTrending: Boolean!
        isFavorite: Boolean!
        post: PostNode!
    }

    type TopicTagNode {
    id: ID!
    name: String!
    slug: String!
    }

    type SubmissionDumpNode {
    id: ID!
    title: String!
    titleSlug: String!
    timestamp: Timestamp!
    runtime: String!
    memory: String!
    status: Int!
    statusDisplay: String!
    lang: String!
    langName: String!
    url: String!
    isPending: String!
    hasNotes: Boolean!
    notes: String!
    flagType: String!
    topicTags: [TopicTagNode!]! 
    }

    type LanguageNode {
    id: ID!
    name: String!
    }

    type UserRatingNode {
    score: Int!
    }

    type RatingNode {
    count: Int!
    average: String!
    userRating: UserRatingNode
    }

    type ArticleNode {
    id: ID!
    title: String!
    content: String
    contentTypeId: String!
    paidOnly: Boolean!
    hasVideoSolution: Boolean!
    paidOnlyVideo: Boolean!
    canSeeDetail: Boolean!
    rating: RatingNode!
    topic: TopicNode!
    }

    type CodeSnippetNode {
    lang: String!
    langSlug: String!
    # String used as template in the code editor
    code: String!
    }

    type QuestionNode {
    questionId: ID!
    questionFrontendId: ID!
    title: String!
    titleSlug: String!
    translatedTitle: String
    categoryTitle: String!
    isFavor: Boolean!
    isPaidOnly: Boolean!
    hide: Boolean!
    acRate: Float!
    difficulty: String!
    # Str in html format to be displayed in the browser
    content: String!
    # Encode JSON in format:
    # {
    #   totalAccepted: str, 
    #   totalSubmission: str,
    #    totalAcceptedRaw: int, 
    #    totalSubmissionRaw: int, 
    #    acRate: str
    # }
    stats: String!
    # Hints sorted, the first hint is the easiest one, 
    # is a str in html format
    hints: [String!]!
    # SQL schema used in database problems
    mysqlSchemas: [String!]!
    # Pandas schema used in database problems
    dataSchemas: [String!]!
    # freqBar
    # eg: "ac", null when no submission
    status: String
    hasSolution: Boolean!
    hasVideoSolution: Boolean!
    solution: ArticleNode
    topicTags: [TopicTagNode!]!
    similarQuestionList: [QuestionNode!]!
    likes: Int!
    dislikes: Int!
    codeSnippets: [CodeSnippetNode!]!
    canSeeQuestion: Boolean!
    envInfo: String!
    hasFrontendPreview: Boolean!
    frontendPreviews: String!
    enableDebugger: Boolean!
    enableRunCode: Boolean!
    enableSubmit: Boolean!
    enableTestMode: Boolean!
    exampleTestcaseList: [String!]!
    # Encode JSON in format:
    # {
    #   name: str, 
    #   params: [{
    #     name: str,
    #     type: str
    #   }],
    #   return: {
    #     type: str
    #   }
    # }
    metaData: String!
    }

    type PagifiedQuestionNode {
    totalNum: Int!
    data: [QuestionNode!]!
    }

    type CommonTagNode {
        name: String!
        slug: String!
    }

    type PanelQuestionNode {
        difficulty: String!
        id: ID!
        paidOnly: Boolean!
        questionFrontendId: String!
        status: String!
        title: String!
        titleSlug: String!
        score: Int
        questionNumber: Int
    }

    type PanelQuestionListNode {
    hasViewPermission: Boolean!
    panelName: String!
    finishedLength: Int!
    totalLength: Int!
    questions: [PanelQuestionNode!]!
    }

    input QuestionListFilterInput {
    listId: String
    difficulty: String
    tags: [String!]
    companies: [String!]
    }

    type DailyChallengeNodeV2 {
    date: String!
    userStatus: String!
    link: String!
    question: QuestionNode!
    }

    type CodingChallengeNodeV2 {
    challenges: [DailyChallengeNodeV2!]!
    weeklyChallenges: [DailyChallengeNodeV2!]!
    }

    type Query {
    matchedUser(username: String!): UserNode
    """"""
    userProfileUserQuestionProgressV2(userSlug: String!): UserQuestionProgressNodeV2!
    """"""
    question(titleSlug: String!): QuestionNode!
    """"""
    randomQuestion(categorySlug: String!, filters: QuestionListFilterInput!): QuestionNode!
    """"""
    questionList(categorySlug: String!, filters: QuestionListFilterInput!, limit: Int, skip: Int): PagifiedQuestionNode!
    """"""
    panelQuestionList(currentQuestionSlug: String!, categorySlug: String, filters: QuestionListFilterInput, envId: String, envType: String): PanelQuestionListNode!
    """"""
    activeDailyCodingChallengeQuestion: DailyChallengeNodeV2!
    """"""
    dailyCodingChallengeV2(year: Int!, month: Int!): CodingChallengeNodeV2!
    """"""
    recentSubmissionList(username: String!, limit: Int): [SubmissionDumpNode]
    """"""
    recentAcSubmissionList(username: String!, limit: Int): [SubmissionDumpNode]
    """"""
    allQuestionsCount: [QuestionCountByDifficultyNode!]!
    """"""
    topic(id: Int!): TopicNode!
    """"""
    solutionTopicTags(questionSlug: String!): [SolutionTagNode!]!
    """"""
    solutionLanguageTags(questionSlug: String!): [SolutionTagNode!]!
    """"""
    languageList: [LanguageNode!]!
    """"""
    currentTimestamp: Timestamp!
    }
`;