import * as vscode from 'vscode';

let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerHoverProvider('javascript', {
		provideHover(document, position, token) {
			return {
				contents: ['Hover Content!!']
			}
		}
	});

	// vscode.languages.registerCodeActionsProvider('javascript', {
	// 	provideCodeActions(document, position, token) {
	// 		return [{
	// 			title: '11',
	// 			command: '111'
	// 		}]
	// 	}
	// })

	// vscode.languages.registerDocumentHighlightProvider('javascript', {
	// 	provideDocumentHighlights(document, position, token) {
	// 		return [
	// 			new vscode.DocumentHighlight(new vscode.Range(position, position))
	// 		]
	// 	}
	// })

	// vscode.languages.registerColorProvider('javascript', {
	// 	provideDocumentColors(document, token) {
	// 		return [new vscode.ColorInformation(
	// 			new vscode.Range(new vscode.Position(1, 1), new vscode.Position(1, 1)),
	// 			new vscode.Color(0.2, 0.3, 0.5, 1),
	// 		)]
	// 	}
	// })


	vscode.languages.registerCompletionItemProvider('javascript', {
		provideCompletionItems(document, position, token, context) {
			return [
				new vscode.CompletionItem('11')
			]
		}
	}, '(');

	// vscode.languages.registerDeclarationProvider('javascript', {
	// 	provideDeclaration(document, position, token) {
	// 		return new vscode.Location(vscode.Uri.file('/out/extension.js'), position)
	// 	}
	// });

	// vscode.languages.registerDocumentFormattingEditProvider('javascript', {
	// 	provideDocumentFormattingEdits(document, options, token) {
	// 			return [
	// 				new vscode.TextEdit(new vscode.Range(
	// 					new vscode.Position(1, 1),
	// 					new vscode.Position(1, 1)
	// 				), '11111')
	// 			]
	// 		}
	// 	});
	// vscode.languages.registerDocumentHighlightProvider('javascript', {
	// 	provideDocumentHighlights(document, position, token) {
	// 			return [
	// 				new vscode.DocumentHighlight(new vscode.Range(position, position), 2)
	// 			]
	// 		}
	// 	});

	// vscode.languages.registerDocumentSymbolProvider('javascript', {
	// 	provideDocumentSymbols(document, token) {
	// 			return [
	// 				new vscode.SymbolInformation('1', 14, 'paop', new vscode.Location())
	// 			]
	// 		}
	// 	});
	// vscode.languages.registerFoldingRangeProvider('javascript', {
	// 	provideFoldingRanges(document, context, token) {
	// 			return [
	// 				new vscode.FoldingRange(1, 2)
	// 			]
	// 		}
	// 	});
	// vscode.languages.registerReferenceProvider('javascript', {
	// 	provideReferences(document, position, context, token) {
	// 			return [new vscode.Location(vscode.Uri.file('./extension.ts'), position)]
	// 		}
	// 	});

		// vscode.languages.registerRenameProvider('javascript', {
		// 	provideRenameEdits(document, position, newName, token) {
		// 		return new vscode.WorkspaceEdit()
		// 	}
		// });
		// vscode.languages.registerTypeDefinitionProvider('javascript', {
		// 	provideTypeDefinition(document, position, token) {
		// 		return [new vscode.Location(vscode.Uri.file('./extension.ts'), position)]
		// 	}
		// });

				// vscode.languages.setTextDocumentLanguage(vscode.workspace.textDocuments[0], 'typescript');
		// vscode.window.onDidChangeActiveTextEditor((e) => {
		// 	const a = vscode.window.showInputBox()
		// 	a.then(res => {
		// 		console.log(res);
		// 	});
		// })


		// vscode.window.setStatusBarMessage('papap');
		// vscode.window.showQuickPick(['1', '2'])

		// vscode.window.showSaveDialog()

		
		
}

export function deactivate() {}
