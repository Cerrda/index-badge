import type { FileDecoration, FileDecorationProvider, Uri } from 'vscode'
import * as path from 'node:path'
import { defineExtension } from 'reactive-vscode'
import { EventEmitter, window, workspace } from 'vscode'

/**
 * 文件装饰提供者，用于给 index.* 文件添加标记
 */
class IndexFilesDecorationProvider implements FileDecorationProvider {
  provideFileDecoration(uri: Uri): FileDecoration | undefined {
    const fileName = path.basename(uri.fsPath)

    // 检查文件名是否匹配 index.* 模式
    if (/^index\./i.test(fileName)) {
      // 从配置中读取徽章和提示文本
      const config = workspace.getConfiguration('indexBadge')
      const badge = config.get<string>('badge', '🌟')
      const tooltip = config.get<string>('tooltip', 'index file')

      return {
        badge,
        tooltip,
      }
    }

    return undefined
  }

  // 用于刷新装饰
  private _onDidChangeFileDecorations = new EventEmitter<Uri | Uri[] | undefined>()
  readonly onDidChangeFileDecorations = this._onDidChangeFileDecorations.event

  refresh(): void {
    this._onDidChangeFileDecorations.fire(undefined)
  }
}

const { activate, deactivate } = defineExtension(() => {
  // 注册文件装饰提供者
  const provider = new IndexFilesDecorationProvider()
  window.registerFileDecorationProvider(provider)

  // 监听配置变化，刷新装饰
  workspace.onDidChangeConfiguration((e) => {
    if (e.affectsConfiguration('indexBadge')) {
      provider.refresh()
    }
  })
})

export { activate, deactivate }
