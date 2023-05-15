    Deployment（部署）：在Flowable中，部署是指将流程定义、模型或表单等资源添加到Flowable引擎中以供执行。通过Deployment API可以进行流程的部署和管理。

    Process Definitions（流程定义）：流程定义是一个流程模型的可执行版本，定义了流程中的任务、网关、事件等元素以及它们之间的流转规则。通过Process Definitions API可以获取流程定义的信息和属性。

    Models（模型）：模型是用于定义和设计流程的可视化工具。Flowable提供了Flowable Modeler和BPMN编辑器等工具，用于创建和编辑流程模型。Models API允许对模型进行创建、读取、更新和删除等操作。

    Process Instances（流程实例）：流程实例是根据流程定义创建的具体执行实例。每个流程实例代表了一个具体的流程执行过程，包含了当前的执行状态和流程变量。Process Instances API允许对流程实例进行管理和操作。

    Executions（执行）：执行是指在流程实例中进行流转的过程。每个执行代表了流程中的一个活动或等待状态，它负责执行该活动的具体行为。Executions API提供了管理执行的功能。

    Tasks（任务）：任务是流程中需要执行者处理的工作单元。每个任务与特定的执行关联，并包含了任务的相关信息和属性。通过Tasks API可以对任务进行管理和操作，如获取任务列表、完成任务、查询任务状态等。

    History（历史）：历史数据是指已经完成的流程实例和任务的相关信息。通过History API可以查询和获取已完成流程实例、任务、活动实例的历史记录。

    Forms（表单）：表单用于定义用户在执行流程任务时需要输入或查看的数据。Flowable支持各种类型的表单，包括动态表单、外部表单等。Forms API提供了对表单的创建、读取和提交等操作。

    Database Tables（数据库表）：Flowable引擎使用数据库来存储流程定义、实例、任务、历史数据等信息。数据库表包含了Flowable引擎所需的各种数据结构和关系。Database Tables API提供了对数据库表的管理和查询。

    Engine（引擎）：引擎是Flowable的核心组件，负责执行流程定义和管理流程实例。Engine API提供了对Flowable引擎的控制和配置。

    Runtime（运行时）：Runtime API提供了对流程运行时状态的操作和查询，包括流程实例、执行、任务和变量等的管理。

    Jobs（作业）：作业是Flowable中的异步执行任务，用于处理定时任务、事件触发等场景。Jobs API提供了对作业的管理和操作，包括创建作业、查询作业、触发作业执行等。

    Users（用户）：用户是Flowable中的身份标识，用于进行流程任务的分配和处理。Users API提供了对用户的创建、查询和管理。

    Groups（用户组）：用户组是一组相关用户的集合，用于管理和分配流程任务。Groups API提供了对用户组的创建、查询和管理。