/*
 * Vencord, a Discord client mod
 * Copyright (c) 2024 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import ErrorBoundary from "@components/ErrorBoundary";
import { classes } from "@utils/misc";
import { ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalRoot, ModalSize, openModal } from "@utils/modal";
import { findByProps } from "@webpack";
import { ContextMenuApi, Flex, Menu, React, TabBar, Text, TextInput } from "@webpack/common";
import noteHandler from "plugins/holynotes/noteHandler";
import { HolyNotes } from "plugins/holynotes/types";

import HelpIcon from "../icons/HelpIcon";
import Errors from "./Error";
import ManageNotebookButton from "./ManageNotebookButton";
import { RenderMessage } from "./RenderMessage";
import HelpModal from "./HelpModal";

const renderNotebook = ({
    notes, notebook, updateParent, sortDirection, sortType, searchInput, closeModal
}: {
    notes: Record<string, HolyNotes.Note>;
    notebook: string;
    updateParent: () => void;
    sortDirection: boolean;
    sortType: boolean;
    searchInput: string;
    closeModal: () => void;
}) => {
    const messageArray = Object.values(notes).map((note) => (
        <RenderMessage
            note={note}
            notebook={notebook}
            updateParent={updateParent}
            fromDeleteModal={false}
            closeModal={closeModal}
        />
    ));

    if (sortType)
        messageArray.sort(
            (a, b) =>
                new Date(b.props.note?.timestamp)?.getTime() - new Date(a.props.note?.timestamp)?.getTime(),
        );

    if (sortDirection) messageArray.reverse();

    const filteredMessages = messageArray.filter((message) =>
        message.props.note.content.toLowerCase().includes(searchInput.toLowerCase()),
    );

    return filteredMessages;
};



export const NoteModal = (props) => {
    const [sortType, setSortType] = React.useState(true);
    const [searchInput, setSearch] = React.useState("");
    const [sortDirection, setSortDirection] = React.useState(true);
    const [currentNotebook, setCurrentNotebook] = React.useState("Main");
    const [notes, setNotes] = React.useState({});
    const [notebooks, setNotebooks] = React.useState([]);

    const { quickSelect, quickSelectLabel, quickSelectQuick, quickSelectValue, quickSelectArrow } = findByProps("quickSelect");

    const forceUpdate = React.useReducer(() => ({}), {})[1] as () => void;

    React.useEffect(() => {
        const update = async () => {
            const notes = await noteHandler.getNotes(currentNotebook);
            setNotes(notes);
        };
        update();
    }, [currentNotebook]);

    React.useEffect(() => {
        async function fetchNotebooks() {
            console.log(await noteHandler.getNotebooks());
            const notebooks = await noteHandler.getNotebooks();
            setNotebooks(notebooks);
        }

        fetchNotebooks();
    }, []);


    if (!notes) return <></>;

    return (
        <ErrorBoundary>
            <ModalRoot {...props} className={classes("vc-notebook")} size={ModalSize.LARGE} style={{ borderRadius: "8px" }}>
                <Flex className={classes("vc-notebook-flex")} direction={Flex.Direction.VERTICAL} style={{ width: "100%" }}>
                    <div className={classes("vc-notebook-top-section")}>
                        <ModalHeader className={classes("vc-notebook-header-main")}>
                            <Text
                                variant="heading-lg/semibold"
                                style={{ flexGrow: 1 }}
                                className={classes("vc-notebook-heading")}>
                                NOTEBOOK
                            </Text>
                            <div className={classes("vc-notebook-flex", "vc-help-icon")} onClick={() => openModal(HelpModal)}>
                                <HelpIcon />
                            </div>
                            <div style={{ marginBottom: "10px" }} className={classes("vc-notebook-search")}>
                                <TextInput
                                    autoFocus={false}
                                    placeholder="Search for a message..."
                                    onChange={e => setSearch(e)}
                                />
                            </div>
                            <ModalCloseButton onClick={props.onClose} />
                        </ModalHeader>
                        <div className={classes("vc-notebook-tabbar-container")}>
                            <TabBar
                                type="top"
                                look="brand"
                                className={classes("vc-notebook-tabbar-bar", "vc-notebook-tabbar")}
                                selectedItem={currentNotebook}
                                onItemSelect={setCurrentNotebook}>
                                {notebooks.map(notebook => (
                                    <TabBar.Item key={notebook} id={notebook} className={classes("vc-notebook-tabbar-bar-item", "vc-notebook-tabbar-item")}>
                                        {notebook}
                                    </TabBar.Item>
                                ))}
                            </TabBar>
                        </div>
                    </div>
                    <ModalContent style={{ marginTop: "20px" }}>
                        <ErrorBoundary>
                            {renderNotebook({
                                notes,
                                notebook: currentNotebook,
                                updateParent: () => forceUpdate(),
                                sortDirection: sortDirection,
                                sortType: sortType,
                                searchInput: searchInput,
                                closeModal: props.onClose,
                            })}
                        </ErrorBoundary>
                    </ModalContent>
                </Flex>
                <ModalFooter>
                    <ManageNotebookButton notebook={currentNotebook} setNotebook={setCurrentNotebook} />
                    <div className={classes("sort-button-container", "vc-notebook-display-left")}>
                        <Flex
                            align={Flex.Align.CENTER}
                            className={quickSelect}
                            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
                                ContextMenuApi.openContextMenu(event, () => (
                                    <>
                                        <Menu.MenuItem
                                            label="Ascending / Date Added"
                                            id="ada"
                                            action={() => {
                                                setSortDirection(true);
                                                setSortType(true);
                                            }} /><Menu.MenuItem
                                            label="Ascending / Message Date"
                                            id="amd"
                                            action={() => {
                                                setSortDirection(true);
                                                setSortType(false);
                                            }} /><Menu.MenuItem
                                            label="Descending / Date Added"
                                            id="dda"
                                            action={() => {
                                                setSortDirection(false);
                                                setSortType(true);
                                            }} /><Menu.MenuItem
                                            label="Descending / Message Date"
                                            id="dmd"
                                            action={() => {
                                                setSortDirection(false);
                                                setSortType(false);
                                            }} />
                                    </>
                                ));
                            }}
                        >
                            <Text className={quickSelectLabel}>Change Sorting:</Text>
                            <Flex grow={0} align={Flex.Align.CENTER} className={quickSelectQuick}>
                                <Text className={quickSelectValue}>
                                    {sortDirection ? "Ascending" : "Descending"} /{" "}
                                    {sortType ? "Date Added" : "Message Date"}
                                </Text>
                                <div className={quickSelectArrow} />
                            </Flex>
                        </Flex>
                    </div>
                </ModalFooter>
            </ModalRoot>
        </ErrorBoundary>
    );
};
